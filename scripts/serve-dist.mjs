import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);

function readArg(flag) {
  const index = args.indexOf(flag);
  if (index === -1) {
    return undefined;
  }

  return args[index + 1];
}

const host = process.env.HOST || readArg('--host') || '127.0.0.1';
const parsedPort = Number(process.env.PORT || readArg('--port') || 4173);
const corsOrigin = process.env.CORS_ORIGIN || readArg('--cors-origin') || '*';

if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
  console.error('Invalid port. Use a value between 1 and 65535.');
  process.exit(1);
}

const port = parsedPort;
const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const distDir = path.resolve(currentDir, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error(`Missing dist directory at ${distDir}`);
  console.error('Run "pnpm build" first.');
  process.exit(1);
}

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.d.ts': 'text/plain; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ts': 'text/plain; charset=utf-8',
  '.wasm': 'application/wasm',
  '.webp': 'image/webp',
};

function corsHeaders(req) {
  const headers = {
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Max-Age': '86400',
  };

  const requestedHeaders = req.headers['access-control-request-headers'];
  if (typeof requestedHeaders === 'string' && requestedHeaders.length > 0) {
    headers['Access-Control-Allow-Headers'] = requestedHeaders;
  } else {
    headers['Access-Control-Allow-Headers'] =
      'Origin, X-Requested-With, Content-Type, Accept, Range';
  }

  if (corsOrigin !== '*') {
    headers.Vary = 'Origin';
  }

  return headers;
}

function ensureInsideDist(targetPath) {
  const relativePath = path.relative(distDir, targetPath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function renderDirectoryListing(dirPath, requestPath) {
  const entries = await fsp.readdir(dirPath, { withFileTypes: true });
  entries.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) {
      return -1;
    }

    if (!a.isDirectory() && b.isDirectory()) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  });

  const normalizedPath = requestPath.endsWith('/') ? requestPath : `${requestPath}/`;
  const parentPath =
    normalizedPath === '/' ? null : normalizedPath.replace(/[^/]+\/$/, '') || '/';

  const links = entries
    .map((entry) => {
      const href = `${normalizedPath}${encodeURIComponent(entry.name)}${entry.isDirectory() ? '/' : ''}`;
      const label = `${entry.name}${entry.isDirectory() ? '/' : ''}`;
      return `<li><a href="${href}">${escapeHtml(label)}</a></li>`;
    })
    .join('\n');

  const parentLink = parentPath
    ? `<li><a href="${parentPath}">../</a></li>`
    : '';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>dist listing</title>
  <style>
    body { font-family: ui-monospace, Menlo, Consolas, monospace; margin: 24px; }
    h1 { font-size: 18px; margin-bottom: 12px; }
    ul { list-style: none; padding-left: 0; }
    li { margin: 6px 0; }
    a { color: #0b57d0; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>${escapeHtml(normalizedPath)}</h1>
  <ul>
    ${parentLink}
    ${links}
  </ul>
</body>
</html>`;
}

async function resolvePath(requestPath) {
  const trimmed = requestPath.startsWith('/') ? requestPath.slice(1) : requestPath;
  let decoded;
  try {
    decoded = decodeURIComponent(trimmed || '.');
  } catch {
    return { status: 400 };
  }
  const fullPath = path.resolve(distDir, decoded);

  if (!ensureInsideDist(fullPath)) {
    return { status: 403 };
  }

  let stats;
  try {
    stats = await fsp.stat(fullPath);
  } catch {
    return { status: 404 };
  }

  if (stats.isDirectory()) {
    const indexPath = path.join(fullPath, 'index.html');
    try {
      const indexStats = await fsp.stat(indexPath);
      if (indexStats.isFile()) {
        return { status: 200, filePath: indexPath, stats: indexStats };
      }
    } catch {
      const html = await renderDirectoryListing(fullPath, requestPath || '/');
      return { status: 200, html };
    }
  }

  if (!stats.isFile()) {
    return { status: 404 };
  }

  return { status: 200, filePath: fullPath, stats };
}

const server = http.createServer(async (req, res) => {
  const baseCorsHeaders = corsHeaders(req);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, baseCorsHeaders);
    res.end();
    return;
  }

  if (!req.url) {
    res.writeHead(400, baseCorsHeaders);
    res.end('Bad request');
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { ...baseCorsHeaders, Allow: 'GET, HEAD, OPTIONS' });
    res.end('Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  } catch {
    res.writeHead(400, baseCorsHeaders);
    res.end('Bad request');
    return;
  }

  let resolved;
  try {
    resolved = await resolvePath(pathname);
  } catch {
    res.writeHead(500, baseCorsHeaders);
    res.end('Internal server error');
    return;
  }

  if (resolved.status !== 200) {
    res.writeHead(resolved.status, baseCorsHeaders);
    if (resolved.status === 404) {
      res.end('Not found');
      return;
    }

    if (resolved.status === 400) {
      res.end('Bad request');
      return;
    }

    res.end('Forbidden');
    return;
  }

  if (resolved.html) {
    res.writeHead(200, {
      ...baseCorsHeaders,
      'Content-Type': 'text/html; charset=utf-8',
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    res.end(resolved.html);
    return;
  }

  const extension = path.extname(resolved.filePath).toLowerCase();
  const contentType = contentTypes[extension] || 'application/octet-stream';

  res.writeHead(200, {
    ...baseCorsHeaders,
    'Cache-Control': 'no-store',
    'Content-Length': resolved.stats.size,
    'Content-Type': contentType,
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  const stream = fs.createReadStream(resolved.filePath);
  stream.on('error', () => {
    res.writeHead(500, baseCorsHeaders);
    res.end('Internal server error');
  });
  stream.pipe(res);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
  } else {
    console.error(error);
  }
  process.exit(1);
});

server.listen(port, host, () => {
  const displayHost = host === '0.0.0.0' ? '127.0.0.1' : host;
  console.log(`Serving ${distDir}`);
  console.log(`URL: http://${displayHost}:${port}`);
  console.log(`CORS: ${corsOrigin}`);
});

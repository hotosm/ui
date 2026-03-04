<!-- markdownlint-disable MD013 MD025 -->

# AGENTS.md

Machine-readable operating guidance for AI coding agents in **hotosm/ui**.

Project: **hotosm/ui**  
Accountability: human maintainers are responsible for all merged changes.

---

# 1) Current Architecture (Authoritative)

The `hotosm/ui` project is a shared UI package that ships reusable web components and theme assets for HOT tools.

Current structure:

- Source components and shared utilities live in `src/`.
- Public package exports are assembled from `src/hotosm-ui.ts`.
- Storybook config and stories live in `.storybook/`.
- Automated tests live in `tests/` and run through Vitest with the Playwright browser provider.
- Build scripts live in `scripts/` and output the published package to `dist/`.

Primary implementation patterns:

- Lit-based web components.
- Shared CSS files and theme assets under `src/style*.css` and `src/themes/`.
- Wrapper exports that make components easy to consume from downstream apps.

---

# 2) Agent Workflow Contract

Use this execution loop:

1. Discover
   - Inspect the existing component, story, and test before changing behavior.
   - Prefer established Lit and styling patterns already used in this repo.
2. Plan
   - Keep edits minimal and scoped to the requested change.
   - Identify the test and build commands needed for validation before coding.
3. Implement
   - Preserve public exports unless the task explicitly changes package API.
   - Keep component logic simple, readable, and consistent with nearby files.
4. Verify
   - Run targeted tests first, then the package build.
   - Report what you could and could not verify.
5. Summarize
   - List changed files and behavioral impact.
   - List risks or follow-up actions if any.

For larger work, prefer small, reviewable patches over broad refactors.

---

# 3) Commands (Use These)

Install dependencies:

```bash
pnpm install
```

Run tests:

```bash
pnpm test
```

Start Storybook locally:

```bash
pnpm run dev
```

Build the package:

```bash
pnpm run build
```

Build Storybook docs:

```bash
pnpm run build:docs
```

---

# 4) Coding Standards

- Prefer explicit, simple, readable code.
- Avoid unnecessary abstractions and broad refactors.
- Keep components focused and small.
- Reuse shared styles, utilities, and existing component patterns where possible.
- Add comments only where intent is non-obvious.
- Default to maintaining backwards-compatible exports and attributes/events.

Lit and web component guidance:

- Follow existing `*.component.ts`, `*.styles.ts`, and wrapper export patterns where applicable.
- Keep DOM structure and attributes stable unless the task requires a breaking change.
- Prefer CSS and component properties over ad hoc runtime logic.
- Preserve accessibility behavior when changing markup, labels, roles, or focus handling.

---

# 5) Testing Standards

All new behavior should be tested.

- Cover success and failure paths when behavior changes.
- Prefer updating or adding Vitest specs near the affected component area in `tests/` or `src/` if colocated tests are already used.
- Keep tests deterministic and browser-safe.
- Do not weaken or remove tests just to make them pass.
- If a UI change affects component behavior, verify both rendering and interaction where practical.

If environment constraints block test execution, state the exact blocker.

---

# 6) Security and Safety Boundaries

Never:

- Commit credentials, tokens, or private environment values.
- Hardcode secrets into source, stories, tests, or build scripts.
- Introduce remote network dependencies into tests without necessity.
- Change package publishing behavior or release metadata without clear task scope.

Ask first before:

- Adding new dependencies
- Changing the public package API in a breaking way
- Modifying build or release behavior
- Editing CI or GitHub workflow files

---

# 7) Repo Change Boundaries

Default edit scope:

- `src/**`
- `tests/**`
- `.storybook/**`
- `scripts/**`
- `package.json`
- `vitest.config.ts`
- `docs/**` when the task is documentation-related

Usually avoid unless the task explicitly requires it:

- `dist/**` (build output)
- `node_modules/**`

Do not modify unless explicitly requested:

- `.env*`
- `.github/workflows/**`

Also avoid editing generated or local-environment artifacts unless the task is specifically about them:

- `coverage/**`
- `storybook-static/**`

---

# 8) Dependency and Versioning Policy

- Keep dependency diffs minimal and justified.
- Avoid unrelated version bumps.
- Respect existing `peerDependencies` expectations for downstream consumers.
- Do not change package name, export structure, or publish files unless required by the task.

If creating commits, use Conventional Commits and include:

```text
Assisted-by: <Tool Name>
```

---

# 9) Anti-Patterns

- Rewriting existing Lit components into a different framework
- Adding one-off patterns when a nearby component already solves the same problem
- Broad visual or API churn unrelated to the task
- Editing generated `dist/` files by hand
- Coupling tests to fragile implementation details when user-visible behavior can be asserted instead

Consistency and maintainability are higher priority than novelty.

---

# 10) Done Criteria

A change is "done" when all are true:

1. Requested behavior is implemented in the appropriate source files.
2. Relevant tests are added or updated.
3. Relevant verification is run, including `pnpm run build` for code changes when feasible.
4. Any blockers, risks, or follow-up actions are clearly stated.

When uncertain, ask instead of assuming.

<!-- markdownlint-enable MD013 MD025 -->

<script type="module" lang="ts">
  import '@hotosm/ui/theme/hot.css';
  import '@hotosm/ui/components/Toolbar';
  import hotLogo from '@hotosm/ui/theme/logo.png';
  import { onMount } from 'svelte';

  let undoCount = 0;
  let redoCount = 0;
  let boldCount = 0;
  let italicCount = 0;
  let underlineCount = 0;
  let leftAlignCount = 0;
  let centerAlignCount = 0;
  let rightAlignCount = 0;

  const undoClick = () => {
    undoCount++;
  };

  const redoClick = () => {
    redoCount++;
  };

  const boldClick = () => {
    boldCount++;
  };

  const italicClick = () => {
    italicCount++;
  };

  const underlineClick = () => {
    underlineCount++;
  };

  const leftAlignClick = () => {
    leftAlignCount++;
  };

  const centerAlignClick = () => {
    centerAlignCount++;
  };

  const rightAlignClick = () => {
    rightAlignCount++;
  };

  // Reset values when component mounts
  onMount(() => {
    undoCount = 0;
    redoCount = 0;
    boldCount = 0;
    italicCount = 0;
    underlineCount = 0;
    leftAlignCount = 0;
    centerAlignCount = 0;
    rightAlignCount = 0;
  });
</script>

<main>
  <div>
    <a href="https://hotosm.org" target="_blank" rel="noreferrer">
      <img src={hotLogo} class="logo" alt="HOT Logo" />
    </a>
  </div>

  <h2>HOTOSM UI Svelte Example</h2>

  <hot-toolbar
    tooltip-position="bottom"
    on:hot-undo-click={undoClick}
    on:hot-redo-click={redoClick}
    on:hot-bold-click={boldClick}
    on:hot-italic-click={italicClick}
    on:hot-underline-click={underlineClick}
    on:hot-leftalign-click={leftAlignClick}
    on:hot-centeralign-click={centerAlignClick}
    on:hot-rightalign-click={rightAlignClick}
  ></hot-toolbar>

  <p>Undo: {undoCount}</p>
  <p>Redo: {redoCount}</p>
  <p>Bold: {boldCount}</p>
  <p>Italic: {italicCount}</p>
  <p>Underline: {underlineCount}</p>
  <p>Justify Left: {leftAlignCount}</p>
  <p>Justify Center: {centerAlignCount}</p>
  <p>Justify Right: {rightAlignCount}</p>

</main>

<style>
  .logo {
    height: 4em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  p {
    font-size: 1.2em;
    margin-top: 1em;
  }
</style>

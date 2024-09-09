<script type="module" lang="ts">
  import { Logo, Button, Toolbar } from '@hotosm/ui/components';
  import { onMount } from 'svelte';

  let count = {};

  const incrementCounter = (type: string) => {
    count = {
      ...count,
      [type]: count[type] ? count[type] + 1 : 1
    }
  };


  // Reset values when component mounts
  onMount(() => {
    count = {};
  });
</script>

<main>
  <div>
    <hot-logo></hot-logo>
  </div>

  <h2>HOTOSM UI Svelte Example</h2>

  <hot-toolbar
    tooltip-position="bottom"
    on:undo={() => { incrementCounter('undo'); }}
    on:redo={() => { incrementCounter('redo'); }}
    on:bold={() => { incrementCounter('bold'); }}
    on:italic={() => { incrementCounter('italic'); }}
    on:underline={() => { incrementCounter('underline'); }}
    on:leftalign={() => { incrementCounter('leftalign'); }}
    on:centeralign={() => { incrementCounter('centeralign'); }}
    on:rightalign={() => { incrementCounter('rightalign'); }}
  ></hot-toolbar>

  <ul>
  {#each Object.entries(count) as [key, value]}
      <li>{key} : {value}</li>
  {/each}
  </ul>

  <hot-button>Click me!</hot-button>

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

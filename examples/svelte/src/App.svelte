<script type="module" lang="ts">
  import hotLogo from './assets/hot_logo.png';
  import { onMount } from 'svelte';

  let counter = 0;

  const clickButton = () => {
    counter++;
  };

  // Optional: You can reset the counter when the component mounts
  onMount(() => {
    counter = 0;
  });
</script>

<main>
  <div>
    <a href="https://hotosm.org" target="_blank" rel="noreferrer">
      <img src={hotLogo} class="logo" alt="HOT Logo" />
    </a>
  </div>

  <h2>HOTOSM UI Svelte Example</h2>

  <hot-button intent="secondary" on:click={clickButton}>Click Me</hot-button>

  <p>Counter: {counter}</p>
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

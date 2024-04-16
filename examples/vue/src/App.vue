<template>
    <main>
        <div>
            <a href="https://hotosm.org" target="_blank" rel="noreferrer">
                <img :src="hotLogo" class="logo" alt="HOT Logo" />
            </a>
        </div>

        <h2>HOTOSM UI Vue Example</h2>

        <hot-button intent="secondary" @click="clickButton"
            >Click Me</hot-button
        >

        <p>Counter: {{ counter }}</p>
    </main>
</template>

<script setup>
import hotLogo from "./assets/hot_logo.png";
import { ref } from "vue";

const counter = ref(0);

const clickButton = () => {
    counter.value++;
};
</script>

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

/* Optional: Style the counter display */
p {
    font-size: 1.2em;
    margin-top: 1em;
}
</style>

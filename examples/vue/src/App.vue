<template>
    <main>
        <div>
            <a href="https://hotosm.org" target="_blank" rel="noreferrer">
                <img :src="hotLogo" class="logo" alt="HOT Logo" />
            </a>
        </div>

        <h2>HOTOSM UI Vue Example</h2>

        <hot-toolbar tooltip-position="bottom"
            @hot-undo-click="incrementCounter('undo')"
            @hot-redo-click="incrementCounter('redo')"
            @hot-bold-click="incrementCounter('bold')"
            @hot-italic-click="incrementCounter('italic')"
            @hot-underline-click="incrementCounter('underline')"
            @hot-leftalign-click="incrementCounter('leftAlign')"
            @hot-centeralign-click="incrementCounter('centerAlign')"
            @hot-rightalign-click="incrementCounter('rightAlign')"
        ></hot-toolbar>

        <p>Undo: {{ counters.undo }}</p>
        <p>Redo: {{ counters.redo }}</p>
        <p>Bold: {{ counters.bold }}</p>
        <p>Italic: {{ counters.italic }}</p>
        <p>Underline: {{ counters.underline }}</p>
        <p>Justify Left: {{ counters.leftAlign }}</p>
        <p>Justify Center: {{ counters.centerAlign }}</p>
        <p>Justify Right: {{ counters.rightAlign }}</p>
    </main>
</template>

<script setup>
import '@hotosm/ui/components/Toolbar';
import hotLogo from '@hotosm/ui/theme/logo.png';
import { ref } from "vue";

const counters = {
    undo: ref(0),
    redo: ref(0),
    bold: ref(0),
    italic: ref(0),
    underline: ref(0),
    leftAlign: ref(0),
    centerAlign: ref(0),
    rightAlign: ref(0),
};

const incrementCounter = (key) => {
    counters[key].value++;
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

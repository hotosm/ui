<template>
    <main>
        <div>
            <a href="https://hotosm.org" target="_blank" rel="noreferrer">
                <img :src="hotLogo" class="logo" alt="HOT Logo" />
            </a>
        </div>

        <h2>HOTOSM UI Vue Example</h2>

        <hot-toolbar tooltip-position="bottom"
            @undo-click="incrementCounter('undo')"
            @redo-click="incrementCounter('redo')"
            @bold-click="incrementCounter('bold')"
            @italic-click="incrementCounter('italic')"
            @underline-click="incrementCounter('underline')"
            @leftalign-click="incrementCounter('leftAlign')"
            @centeralign-click="incrementCounter('centerAlign')"
            @rightalign-click="incrementCounter('rightAlign')"
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
import '@hotosm/ui/components/toolbar/toolbar';
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

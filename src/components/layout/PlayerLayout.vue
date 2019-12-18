<template>
    <div class="grid">
        <div class="menu">
            <slot name="menu" />
        </div>
        <div class="main">
            <slot name="main" />
        </div>
        <div class="controls">
            <slot name="controls" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayerLayout"
    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas: "menu main controls";
        height: 100%;
    }

    .menu {
        grid-area: main;
    }

    .main {
        grid-area: menu;
    }

    .controls {
        grid-area: controls;
    }
</style>
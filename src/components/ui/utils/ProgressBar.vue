<template>
    <div class="bar">
        <div class="track" :style="{width: percent + '%'}">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: {
            percent: {
                type: Number,
                value: 0
            }
        }
    }
</script>

<style scoped>
    .bar {
        background-color: #E9F0F8;
        height: 3px;
        width: 100%;
    }

    .track {
        background-color: #3777C9;
        height: 3px;
    }
</style>

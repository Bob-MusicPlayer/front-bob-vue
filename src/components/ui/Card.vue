<template>
    <div class="card" :style="{background: color, ...classes.root}">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            color: String,
            classes: {
                default: function () {
                    return {root: {}}
                },
                type: Object
            }
        }
    }
</script>

<style scoped>
    .card {
        height: auto;
        background-image: radial-gradient(circle farthest-corner at 1.3% 2.8%, rgba(239, 249, 249, 1) 0%, rgba(182, 199, 226, 1) 100.2%);
        border-radius: 2rem;
        padding: 20px;
    }
</style>
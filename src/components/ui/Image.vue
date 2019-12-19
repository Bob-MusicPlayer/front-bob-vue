<template>
    <img :src="source" :class="{circle: shape === 'circle'}" />
</template>

<script>
    export default {
        name: "BImage",
        props: {
            source: String,
            shape: {
                default: "rectangle",
                type: String,
                validator: function (value) {
                    return ['rectangle', 'circle'].indexOf(value) !== -1
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: inherit;
        height: inherit;
    }

    img.circle {
        border-radius: 99rem;
    }
</style>
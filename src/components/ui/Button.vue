<template>
    <button :class="{rectangle: shape === 'rectangle', rounded: shape === 'rounded', circle: shape === 'circle'}">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            shape: {
                default: "rectangle",
                type: String,
                validator: function (value) {
                    return ['rectangle', 'rounded', 'circle'].indexOf(value) !== -1
                }
            },
            color: String
        }
    }
</script>

<style scoped>
    button {
        border: 0;
        cursor: pointer;
    }

    button:focus {
        outline: none;
    }

    .circle {
        border-radius: 50rem;
        padding: .5rem;
        width: 32px;
        height: 32px;
    }

    .rounded {
        border-radius: 1rem;
    }
</style>
<template>
    <span :class="{fullWidth: fullWidth}" :style="this.style">
        <slot/>
    </span>
</template>

<script>
    export default {
        name: "Typography",
        props: {
            fullWidth: Boolean,
            align: String,
            size: String,
            weight: String,
            color: String
        },
        computed: {
            style() {
                return {
                    textAlign: this.$props.align,
                    fontSize: this.$props.size,
                    fontWeight: this.$props.weight,
                    color: this.$props.color
                }
            }
        }
    }
</script>

<style scoped>
    .fullWidth {
        display: block;
        width: 100%;
    }
</style>
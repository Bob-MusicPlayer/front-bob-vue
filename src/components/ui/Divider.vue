<template>
    <div class="divider" :class="{vertical: vertical, horizontal: horizontal}"></div>
</template>

<script>
    export default {
        name: "Divider",
        props: {
            vertical: {
                type: Boolean,
                default: true
            },
            horizontal: Boolean
        }
    }
</script>

<style scoped>
    .divider {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .horizontal {
        width: calc(100% - 10px);
        height: 1px;
        margin: 10px 5px;
    }

    .vertical {
        height: calc(100% - 10px);
        width: 1px;
        margin: 5px 10px;
    }
</style>
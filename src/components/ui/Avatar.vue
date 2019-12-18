<template>
    <div class="container" :style="this.avatarSize">
        <img :src="source" :style="this.avatarSize" />
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            source: String,
            size: String
        },
        computed: {
            avatarSize: function () {
                const sizes = {
                    large: {
                        height: "64px",
                        width: "64px"
                    },
                    normal: {
                        height: "48px",
                        width: "48px"
                    },
                    small: {
                        height: "32px",
                        width: "32px"
                    }
                };

                return sizes[this.$props.size !== undefined ? this.$props.size : "normal"]
            }
        }
    }
</script>

<style scoped>
    .container {
        border-radius: 99rem;
        overflow: hidden;
    }

    img {
        object-fit: contain;
    }
</style>
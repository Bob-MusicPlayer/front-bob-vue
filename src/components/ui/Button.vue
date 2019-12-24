<template>
    <button :class="{rectangle: shape === 'rectangle', rounded: shape === 'rounded', circle: shape === 'circle'}"
            :style="{backgroundColor: this.buttonColor, width: this.buttonSize, height: this.buttonSize}">
        <slot/>
    </button>
</template>

<script>
    import {Color} from "@/components/ui/constants/proptypes";
    import {getColor} from "@/components/ui/utils/color";

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
            color: Color,
            size: {
                type: String,
                default: "normal",
                validator: function (value) {
                    return ['small', 'normal', 'large'].indexOf(value) !== -1
                }
            }
        },
        computed: {
            buttonColor: function () {
                return getColor(this.$props.color)
            },
            buttonSize: function () {
                const sizes = {
                    "small": "16px",
                    "normal": "32px",
                    "large": "48px"
                };

                return sizes[this.$props.size];
            }
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
    }

    .rounded {
        border-radius: 1rem;
    }
</style>

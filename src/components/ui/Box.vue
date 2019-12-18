<template>
    <div v-bind:style="this.style">
        <slot/>
    </div>
</template>

<script>
    const SizePropsType = {
        default: null,
        type: [Number, String]
    };
    
    export default {
        name: "Box",
        props: {
            height: SizePropsType,
            width: SizePropsType,
            marginLeft: SizePropsType,
            marginRight: SizePropsType,
            marginTop: SizePropsType,
            marginBottom: SizePropsType,
            marginX: SizePropsType,
            marginY: SizePropsType,
            paddingLeft: SizePropsType,
            paddingRight: SizePropsType,
            paddingTop: SizePropsType,
            paddingBottom: SizePropsType,
            paddingX: SizePropsType,
            paddingY: SizePropsType,
            display: String,
            flexDirection: String,
            justifyContent: String,
            alignItems: String,
        },
        computed: {
            style: function () {

                //margin
                let marginLeft = this.$props.marginLeft === null ? this.$props.marginX : this.$props.marginLeft;
                let marginRight = this.$props.marginRight === null ? this.$props.marginX : this.$props.marginRight;
                let marginTop = this.$props.marginTop === null ? this.$props.marginY : this.$props.marginTop;
                let marginBottom = this.$props.marginBottom === null ? this.$props.marginY : this.$props.marginBottom;

                //padding
                let paddingLeft = this.$props.paddingLeft === null ? this.$props.paddingX : this.$props.paddingLeft;
                let paddingRight = this.$props.paddingRight === null ? this.$props.paddingX : this.$props.paddingRight;
                let paddingTop = this.$props.paddingTop === null ? this.$props.paddingY : this.$props.paddingTop;
                let paddingBottom = this.$props.paddingBottom === null ? this.$props.paddingY : this.$props.paddingBottom;

                return {
                    height: this.$props.height,
                    width: this.$props.width,
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    marginTop: marginTop,
                    marginBottom: marginBottom,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    paddingTop: paddingTop,
                    paddingBottom: paddingBottom,
                    display: this.$props.display,
                    flexDirection: this.$props.flexDirection,
                    justifyContent: this.$props.justifyContent,
                    alignItems: this.$props.alignItems,
                }
            }
        }
    }
</script>

<style scoped>

</style>
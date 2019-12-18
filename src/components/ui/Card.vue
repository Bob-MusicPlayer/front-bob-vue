<template>
    <div class="card">
        <Box padding-x="20px" padding-y="20px">
            <slot />
        </Box>
    </div>
</template>

<script>
    import Box from "@/components/ui/Box";

    export default {
        name: "Card",
        components: {
            Box
        }
    }
</script>

<style scoped>
    .card {
        height: inherit;
        background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% );
        border-radius: 2rem;
    }
</style>
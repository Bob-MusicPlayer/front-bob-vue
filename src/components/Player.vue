<template>
    <Box height="100%">
        <PlayerLayout>
            <template v-slot:menu>
                menu
            </template>
            <template v-slot:main>
                main
            </template>
            <template v-slot:controls>
                <Controls />
            </template>
        </PlayerLayout>
    </Box>
</template>

<script>
    import PlayerLayout from "@/components/layout/PlayerLayout";
    import Box from "@/components/ui/Box";
    import Controls from "@/components/widget/player/Controls";

    export default {
        name: "Player",
        components: {
            Controls,
            PlayerLayout,
            Box
        }
    }
</script>

<style scoped>
    :host {
        height: 100%;
    }
</style>
<template>
    <Box height="100%" width="350px" padding-x="10px" padding-y="10px">
        <Card>
            <Box display="flex" align-items="center" justify-content="space-between">
                <Box display="flex" align-items="center">
                    <Avatar source="https://i.pravatar.cc/300?u=JonahWichtrup"/>
                    <Box margin-left="5px">
                        <span>Jonah Wichtrup</span>
                    </Box>
                </Box>
                <Button shape="circle"><font-awesome-icon color="#8a939c" icon="cog"/></Button>
            </Box>
        </Card>
    </Box>
</template>

<script>
    import Box from "@/components/ui/Box";
    import Card from "@/components/ui/Card";
    import Avatar from "@/components/ui/Avatar";
    import Button from "@/components/ui/Button";

    export default {
        name: "Controls",
        components: {
            Button,
            Avatar,
            Box,
            Card
        }
    }
</script>

<style scoped>

</style>
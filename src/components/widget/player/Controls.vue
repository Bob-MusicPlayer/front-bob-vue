<template>
    <Box height="100%" width="350px" padding-x="10px" padding-y="10px">
        <Card :classes="{root: {height: '100%'}}">
            <Box display="flex" align-items="center" justify-content="space-between">
                <Box display="flex" align-items="center">
                    <Avatar source="https://i.pravatar.cc/300?u=JonahWichtrup"/>
                    <Box margin-left="5px">
                        <span>Jonah Wichtrup</span>
                    </Box>
                </Box>
                <Button shape="circle" color="translucent">
                    <font-awesome-icon color="#8a939c" icon="cog"/>
                </Button>
            </Box>
            <Box padding-y="2rem">
                <Typography size="1.5rem" weight="bold" color="#59616c">Play queue</Typography>
            </Box>
            <Box margin-top="64px">
                <Card color="white" :classes="{root: this.rootStyles}">
                    <Box display="flex" padding-x="0.25rem" justify-content="space-between">
                        <font-awesome-icon icon="heart" color="#8a939c"/>
                        <font-awesome-icon icon="times" color="#8a939c"/>
                    </Box>
                    <Box display="flex" justify-content="center">
                        <Box width="100px" height="100px"
                             margin-top="calc(-1.5rem - 64px)">
                            <BImage shape="circle"
                                    source="https://edmboost.org/wp-content/uploads/2019/12/1-301-716x716.jpg"/>
                        </Box>
                    </Box>
                    <Box padding-y="0.5rem">
                        <Typography align="center" weight="bold" full-width>Roam With You - Club Mix</Typography>
                        <Box padding-y="0.1rem">
                            <Typography align="center" size=".9rem" full-width>Grabbitz</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justify-content="space-around" align-items="center" padding-x="10%">
                        <Button shape="circle" color="secondary">
                            <font-awesome-icon icon="random"/>
                        </Button>
                        <Button shape="circle" color="transparent">
                            <font-awesome-icon icon="backward"/>
                        </Button>
                        <Button shape="circle" color="transparent" size="large">
                            <font-awesome-icon size="2x" icon="play"/>
                        </Button>
                        <Button shape="circle" color="transparent">
                            <font-awesome-icon icon="forward"/>
                        </Button>
                        <Button shape="circle" color="secondary">
                            <font-awesome-icon icon="sync"/>
                        </Button>
                    </Box>
                    <Box margin-top=".5rem">
                        <Box display="flex" margin-bottom=".25rem" justify-content="space-between">
                            <Typography size="13px">00:45</Typography>
                            <Typography size="13px">-02:32</Typography>
                        </Box>
                        <ProgressBar percent="40" />
                    </Box>
                </Card>
            </Box>
        </Card>
    </Box>
</template>

<script>
    import Box from "@/components/ui/Box";
    import Card from "@/components/ui/Card";
    import Avatar from "@/components/ui/Avatar";
    import Button from "@/components/ui/Button";
    import BImage from "@/components/ui/Image";
    import Typography from "@/components/ui/Typography";
    import ProgressBar from "../../ui/utils/ProgressBar";

    export default {
        name: "Controls",
        components: {
            ProgressBar,
            Typography,
            BImage,
            Button,
            Avatar,
            Box,
            Card
        },
        created() {
            this.rootStyles = {
                borderRadius: "0.5rem",
                padding: "0.75rem 0.5rem 0.5rem 0.5rem",
            };
        }
    }
</script>

<style scoped>

</style>

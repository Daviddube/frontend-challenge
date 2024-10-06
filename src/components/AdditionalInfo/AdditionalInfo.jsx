import { Anchor, Button, Center, Checkbox, Paper, Select, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdditionalInfo = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>ADDITIONAL INFO</Title>
                <Select
                    label="Favorite color"
                    placeholder="SELECT YOUR FAVORITE COLOR"
                    data={["red","green", "yellow", "blue"]}
                    pb="md"
                />
                <Checkbox
                    label={
                        <>
                            I AGREE TO{' '}
                            <Anchor href="/terms">
                                TERMS AND CONDITIONS
                            </Anchor>
                            .
                        </>
                    }
                />
                <Button mt="xl" mb="xl" mr="md" onClick={() => routeChange("/")}>
                    BACK
                </Button>
                <Button mt="xl" mb="xl" onClick={() => routeChange("/confirmation")}>
                    NEXT
                </Button>
            </Paper>
        </Center>
    </>
}

export default AdditionalInfo;
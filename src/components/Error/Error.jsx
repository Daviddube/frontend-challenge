import { Button, Center, CloseIcon, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>ERROR</Title>
                <CloseIcon size={20} />
                <Text>
                    UH OH, SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.
                </Text>
                <Button mt="xl" mb="xl" onClick={() => routeChange("/")}>
                    RESTART
                </Button>
            </Paper>
        </Center>
    </>
}

export default Error;
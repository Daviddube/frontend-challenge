import { Button, Center, CheckIcon, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>SUCCESS!</Title>
                <CheckIcon size={20} />
                <Text>
                    YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.
                </Text>
                <Button mt="xl" mb="xl" onClick={() => routeChange("/")}>
                    RESTART
                </Button>
            </Paper>
        </Center>
    </>
}

export default Success;
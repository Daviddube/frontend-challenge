import { Button, Center, CheckIcon, Paper, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";

const Success = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const { form } = useContext(FormContext);

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>SUCCESS!</Title>
                <CheckIcon size={20} />
                <Text>
                    YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.
                </Text>
                <Button mt="xl" mb="xl" onClick={() => {
                    form.reset();
                    routeChange("/");
                }}>
                    RESTART
                </Button>
            </Paper>
        </Center>
    </>
}

export default Success;
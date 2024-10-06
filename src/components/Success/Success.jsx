import { Button, Center, CheckIcon, Paper, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";

const Success = () => {
const navigate = useNavigate();

    const { form } = useContext(FormContext);

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Center>
                <Title mb="md">SUCCESS!</Title>
                </Center>
                <CheckIcon size={20} />
                <Text>
                    YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.
                </Text>
                <Button mt="xl" mb="xl" onClick={() => {
                    form.reset();
                    navigate("/");
                }}>
                    RESTART
                </Button>
            </Paper>
        </Center>
    </>
}

export default Success;
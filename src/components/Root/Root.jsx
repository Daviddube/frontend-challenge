import { Button, Center, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
let navigate = useNavigate();
const routeChange = () => {
    navigate("/more-info");
}

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>SIGN UP</Title>
                <TextInput
                    label="First Name"
                    placeholder="FIRST NAME"
                >
                </TextInput>
                <TextInput
                    label="E-mail"
                    placeholder="E-MAIL"
                >
                </TextInput>
                <PasswordInput
                    label="Password"
                    placeholder="PASSWORD"
                >
                </PasswordInput>
                <Button mt="xl" mb="xl" onClick={routeChange}>
                    NEXT
                </Button>
            </Paper>
        </Center>
    </>
}

export default Root;
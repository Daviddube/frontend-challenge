import { Button, Center, Paper, PasswordInput, Space, TextInput, Title } from "@mantine/core";
import React from "react";

const Root = () => {
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
                <Space />
                <Button mt="xl" mb="xl">
                    Next
                </Button>
            </Paper>
        </Center>
    </>
}

export default Root;
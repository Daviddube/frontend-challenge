import { Button, Center, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import { useNavigate } from "react-router";

const Root = () => {
const { form } = useContext(FormContext);
const navigate = useNavigate();

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>SIGN UP</Title>
                <form onSubmit={form.onSubmit(() => navigate("/more-info"))}>
                    <TextInput
                        label="First Name"
                        placeholder="FIRST NAME"
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    >
                    </TextInput>
                    <TextInput
                        label="E-mail"
                        placeholder="E-MAIL"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    >
                    </TextInput>
                    <PasswordInput
                        label="Password"
                        placeholder="PASSWORD"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    >
                    </PasswordInput>
                    <Button mt="xl" mb="xl" type="submit">
                        NEXT
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default Root;
import { Button, Center, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";

const Root = () => {
let navigate = useNavigate();
const routeChange = () => {
    navigate("/more-info");
}

const { form } = useContext(FormContext);

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>SIGN UP</Title>
                <form onSubmit={form.onSubmit(routeChange)}>
                    <TextInput
                        label="First Name"
                        placeholder="FIRST NAME"
                        key={form.key('firstName')}
                        {...form.getInputProps('firstName')}
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
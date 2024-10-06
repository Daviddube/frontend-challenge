import { Button, Center, LoadingOverlay, Paper, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import { useMutation } from "@tanstack/react-query";
import { submitForm } from "../../apis/submitForm";
import { useNavigate } from "react-router";

const Confirmation = () => {
    const { form } = useContext(FormContext);
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: submitForm
    })
    if (mutation.isError) {
        navigate("/error")
    } else {
        if (mutation.isSuccess) {
            navigate("/success")
        }
    }

    return <>
        <Center>
            <Paper shadow="xs" p="xl" position="relative">
                <LoadingOverlay visible={mutation.isPending} />
                <Title>CONFIRMATION</Title>
                <form onSubmit={form.onSubmit(({ name, email, password, color, terms }) => {
                    console.log('test');
                    mutation.mutate({
                        name,
                        email,
                        password,
                        color,
                        terms
                    });
                })}>
                    <Text>FIRST NAME: {form.getValues().name}</Text>
                    <Text>E-MAIL: {form.getValues().email}</Text>
                    <Text>PASSWORD: *****</Text>
                    <Text>FAVORITE COLOR: {form.getValues().color}</Text>
                    <Text>TERMS AND CONDITIONS: {form.getValues().terms.toString()}</Text>
                    <Button mt="xl" mb="xl" mr="md" variant="subtle" onClick={() => navigate("/more-info")}>
                        BACK
                    </Button>
                    <Button mt="xl" mb="xl" type="submit">
                        SUBMIT
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default Confirmation;
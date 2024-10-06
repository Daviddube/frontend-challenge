import { Button, Center, LoadingOverlay, Paper, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";
import { useMutation } from "@tanstack/react-query";
import { submitForm } from "../../apis/submitForm";

const Confirmation = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const { form } = useContext(FormContext);

    const mutation = useMutation({
        mutationFn: submitForm
    })

    return <>
        <Center>
            <Paper shadow="xs" p="xl" position="relative">
                <LoadingOverlay visible={mutation.isPending} />
                <Title>CONFIRMATION</Title>
                <form onSubmit={form.onSubmit(({ name, email, password, color, terms }) => {
                    mutation.mutate({
                        name,
                        email,
                        password,
                        color,
                        terms
                    })
                })}>
                    <Text>FIRST NAME: {form.getValues().name}</Text>
                    <Text>E-MAIL: {form.getValues().email}</Text>
                    <Text>PASSWORD: *****</Text>
                    <Text>FAVORITE COLOR: {form.getValues().color}</Text>
                    <Text>TERMS AND CONDITIONS: {form.getValues().terms.toString()}</Text>
                    <Button mt="xl" mb="xl" mr="md" onClick={() => routeChange("/more-info")}>
                        BACK
                    </Button>
                    <Button mt="xl" mb="xl" type="submit"> {/* to change to api call */}
                        SUBMIT
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default Confirmation;
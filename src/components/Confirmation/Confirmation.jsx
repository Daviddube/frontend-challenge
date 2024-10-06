import { Button, Center, Paper, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";

const Confirmation = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const { form } = useContext(FormContext);

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>CONFIRMATION</Title>
                <form onSubmit={form.onSubmit(() => {
                    routeChange("/error");
                })}>
                    <Text>FIRST NAME: {form.getValues().firstName}</Text>
                    <Text>E-MAIL: {form.getValues().email}</Text>
                    <Text>PASSWORD: {form.getValues().password}</Text>
                    <Text>FAVORITE COLOR: {form.getValues().favoriteColor}</Text>
                    <Text>TERMS AND CONDITIONS: {form.getValues().areTermsAccepted.toString()}</Text>
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
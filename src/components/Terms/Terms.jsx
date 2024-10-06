import { Button, Center, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
const navigate = useNavigate();

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title mb="md">Terms and Conditions</Title>
                <Text>
                    Please fill out the entire form.
                </Text>
                <form>
                    <Button mt="xl" mb="xl" onClick={() => {
                        navigate("/more-info");
                    }}>
                        BACK
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default Terms;
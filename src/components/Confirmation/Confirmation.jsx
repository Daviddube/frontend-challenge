import { Button, Center, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>CONFIRMATION</Title>
                <Text>FIRST NAME: </Text>
                <Text>E-MAIL: </Text>
                <Text>PASSWORD: </Text>
                <Text>FAVORITE COLOR: </Text>
                <Text>TERMS AND CONDITIONS: </Text>
                <Button mt="xl" mb="xl" mr="md" onClick={() => routeChange("/more-info")}>
                    BACK
                </Button>
                <Button mt="xl" mb="xl" onClick={() => routeChange("/success")}> {/* to change to api call */}
                    SUBMIT
                </Button>
            </Paper>
        </Center>
    </>
}

export default Confirmation;
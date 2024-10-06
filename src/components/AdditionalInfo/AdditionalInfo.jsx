import { Anchor, Button, Center, Checkbox, Paper, Select, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";

const AdditionalInfo = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const { form } = useContext(FormContext);

    return <>
        <Center>
            <Paper shadow="xs" p="xl">
                <Title>ADDITIONAL INFO</Title>
                <form onSubmit={form.onSubmit(() => routeChange("/confirmation"))}>
                    <Select
                        label="Favorite color"
                        placeholder="SELECT YOUR FAVORITE COLOR"
                        data={["red","green", "yellow", "blue"]}
                        pb="md"
                        key={form.key('favoriteColor')}
                        {...form.getInputProps('favoriteColor')}
                    />
                    <Checkbox
                        label={
                            <>
                                I AGREE TO{' '}
                                <Anchor href="/terms">
                                    TERMS AND CONDITIONS
                                </Anchor>
                                .
                            </>
                        }
                        key={form.key('areTermsAccepted')}
                        {...form.getInputProps('areTermsAccepted', { type: "checkbox" })}
                    />
                    <Button mt="xl" mb="xl" mr="md" onClick={() => routeChange("/")}>
                        BACK
                    </Button>
                    <Button mt="xl" mb="xl" onClick={() => routeChange("/confirmation")}>
                        NEXT
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default AdditionalInfo;
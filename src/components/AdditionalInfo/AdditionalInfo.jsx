import { Anchor, Button, Center, Checkbox, LoadingOverlay, Paper, Select, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import { fetchColors } from "../../apis/getColors";

const AdditionalInfo = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const { data, isLoading } = useQuery({queryKey: ['colors'], queryFn: fetchColors});
    const { form } = useContext(FormContext);
    return <>
        <Center>
            <Paper shadow="xs" p="xl" pos="relative">
                <LoadingOverlay visible={isLoading} />
                <Title>ADDITIONAL INFO</Title>
                <form onSubmit={form.onSubmit(() => routeChange("/confirmation"))}>
                    <Select
                        label="Favorite color"
                        placeholder="SELECT YOUR FAVORITE COLOR"
                        data={data}
                        pb="md"
                        key={form.key('color')}
                        {...form.getInputProps('color')}
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
                        key={form.key('terms')}
                        {...form.getInputProps('terms', { type: "checkbox" })}
                    />
                    <Button mt="xl" mb="xl" variant="subtle" mr="md" onClick={() => routeChange("/")}>
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
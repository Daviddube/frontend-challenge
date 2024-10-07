import { Anchor, Button, Center, Checkbox, LoadingOverlay, Paper, Select, Title } from "@mantine/core";
import React, { useContext } from "react";
import { FormContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import { fetchColors } from "../../apis/getColors";
import { useNavigate } from "react-router";

const AdditionalInfo = () => {

    const { data, isLoading } = useQuery({queryKey: ['colors'], queryFn: fetchColors});
    const { form } = useContext(FormContext);
const navigate = useNavigate();
    return <>
        <Center>
            <Paper shadow="xs" p="xl" pos="relative">
                <LoadingOverlay visible={isLoading} />
                <Title mb="md">ADDITIONAL INFO</Title>
                <form onSubmit={form.onSubmit(() => navigate("/confirmation"))}>
                    <Select
                        data-testid="dropdown"
                        label="Favorite color"
                        placeholder="SELECT YOUR FAVORITE COLOR"
                        data={data}
                        pb="md"
                        key={form.key('color')}
                        {...form.getInputProps('color')}
                    />
                    <Checkbox
                    data-testid="checkbox"
                        label={
                            <>
                                I AGREE TO{' '}
                                <Anchor onClick={() => navigate("/terms")}>
                                    TERMS AND CONDITIONS
                                </Anchor>
                                .
                            </>
                        }
                        key={form.key('terms')}
                        {...form.getInputProps('terms', { type: "checkbox" })}
                    />
                    <Button mt="xl" mb="xl" variant="subtle" mr="md" onClick={() => navigate("/")}>
                        BACK
                    </Button>
                    <Button mt="xl" mb="xl" onClick={() => navigate("/confirmation")}>
                        NEXT
                    </Button>
                </form>
            </Paper>
        </Center>
    </>
}

export default AdditionalInfo;
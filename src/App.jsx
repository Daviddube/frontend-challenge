import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React, { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import { isEmail, useForm } from "@mantine/form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const FormContext = createContext(null);

const App = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false
    },
     validate: {
      email: isEmail('Invalid email')
    }
});

const queryClient = new QueryClient()

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <FormContext.Provider value={{form}}>
          <RouterProvider router={router} />
        </FormContext.Provider>
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;

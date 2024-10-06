import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React, { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import { isEmail, useForm } from "@mantine/form";

export const FormContext = createContext(null);

const App = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      email: '',
      password: '',
      favoriteColor: '',
      areTermsAccepted: false
    },
    //  validate: {
    //   email: isEmail('Invalid email')
    // }
});
  return (
    <MantineProvider>
      <FormContext.Provider value={{form}}>
        <RouterProvider router={router} />
      </FormContext.Provider>
    </MantineProvider>
  );
};

export default App;

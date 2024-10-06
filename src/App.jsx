import { MantineProvider } from "@mantine/core";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;

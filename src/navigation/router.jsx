import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
        path="/"
        element={<Root />}
        />
    )
);
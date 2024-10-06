import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route
                index
                element={<Root />}
            />
            <Route
                path="more-info"
                element={<AdditionalInfo />}
            />
        </Route>
    )
);
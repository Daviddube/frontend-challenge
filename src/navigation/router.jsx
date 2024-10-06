import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import Confirmation from "../components/Confirmation/Confirmation";
import Success from "../components/Success/Success";
import Error from "../components/Error/Error";
import Terms from "../components/Terms/Terms";

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
            <Route
                path="confirmation"
                element={<Confirmation />}
            />
            <Route
                path="success"
                element={<Success />}
            />
            <Route
                path="error"
                element={<Error />}
            />
            <Route
                path="terms"
                element={<Terms />}
            />
        </Route>
    )
);
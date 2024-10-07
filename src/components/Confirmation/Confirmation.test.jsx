import React from "react";
import { render, screen } from "../../../test-utils";
import Confirmation from "./Confirmation";

test("displays the confirmation page", () => {
    render(<Confirmation />);
    expect(screen.getByText("CONFIRMATION")).toBeTruthy();
});
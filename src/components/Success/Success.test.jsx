import React from "react";
import Success from "./Success";
import { render, screen } from "../../../test-utils";

test("displays the success page", () => {
    render(<Success />);
    expect(screen.getByText("SUCCESS!")).toBeTruthy();
});

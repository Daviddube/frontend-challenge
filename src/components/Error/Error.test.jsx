import React from "react";
import { render, screen } from "../../../test-utils";
import Error from "./Error";

test("displays the error page page", () => {
    render(<Error />);
    expect(screen.getByText("ERROR")).toBeTruthy();
});

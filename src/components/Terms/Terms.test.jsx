import React from "react";
import { render, screen } from "../../../test-utils";
import Terms from "./Terms";
;

test("displays the terms page page", () => {
    render(<Terms />);
    expect(screen.getByText("TERMS AND CONDITIONS")).toBeTruthy();
});

import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import { fireEvent, render, screen } from "../../../test-utils";

test("displays the additional info page", () => {
    render(<AdditionalInfo />);
    expect(screen.getByText("ADDITIONAL INFO")).toBeTruthy();
});

test("Correctly fills out all fields", () => {
    render(<AdditionalInfo />);
    const color = screen.getByTestId("dropdown");
    const checkbox = screen.getByTestId("checkbox");
    fireEvent.change(color, {target: {value:"red"}});
    fireEvent.click(checkbox);
    expect(color.value).toBe("red");
    expect(checkbox.checked).toEqual(true);
});
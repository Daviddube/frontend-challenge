import React from "react";
import Root from "./Root";
import { fireEvent, render, screen } from "../../../test-utils";

test("displays the root page", () => {
    render(<Root />);
    expect(screen.getByText("SIGN UP")).toBeTruthy();
});

test("Correctly fills out all fields", () => {
    render(<Root />);
    const name = screen.getByLabelText("First Name");
    const email = screen.getByLabelText("E-mail");
    const password = screen.getByLabelText("Password");
    fireEvent.change(name, {target: {value:"David"}});
    fireEvent.change(email, {target: {value:"david.dube@test.com"}});
    fireEvent.change(password, {target: {value:"secret"}});
    expect(name.value).toBe("David");
    expect(email.value).toBe("david.dube@test.com");
    expect(password.value).toBe("secret");
});

test("Throws an email validation error if email is empty", () => {
    render(<Root />);
    fireEvent.click(screen.getByText("NEXT"));
    expect(screen.getByText("Invalid email")).toBeTruthy();
});

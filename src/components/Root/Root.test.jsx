import React from "react";
import Root from "./Root";
import { createRoot } from "react-dom/client";

const form = {
    onSubmit: jest.fn(),
    getInputProps: jest.fn(),
    key: jest.fn(),
    mount: jest.fn()
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  root.render(<Root />);
  root.unmount(div);
});

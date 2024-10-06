import React from "react";
import { createRoot } from "react-dom/client";
import Success from "./Success";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  root.render(<Success />);
  root.unmount(div);
});

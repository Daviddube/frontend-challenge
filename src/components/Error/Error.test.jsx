import React from "react";
import { createRoot } from "react-dom/client";
import Error from "./Error";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  root.render(<Error />);
  root.unmount(div);
});
import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import { createRoot } from "react-dom/client";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  root.render(<AdditionalInfo />);
  root.unmount(div);
});

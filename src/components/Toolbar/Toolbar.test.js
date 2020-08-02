import React from "react";
import { render } from "@testing-library/react";
import Toolbar from "./Toolbar";

test("renders toolbar", () => {
  const { getByText } = render(<Toolbar />);
  const linkElement = getByText(/海匯團隊資金管理工具/i);
  expect(linkElement).toBeInTheDocument();
});

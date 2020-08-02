import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders logo", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/海匯團隊資金管理工具/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";

import App from "../App";

test("App renders without crashing", () => {
  const { getByText } = renderWithStore(<App />);
  expect(getByText("APP")).toHaveTextContent("APP");
});

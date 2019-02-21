import React from "react";

import Debug from "../Debug";

test("Debug renders initial data from store", () => {
  const { getByText } = renderWithStore(<Debug src="data.test" />, {
    initialState: { data: { test: "something-something" } },
  });
  expect(getByText('"something-something"')).not.toBeEmpty();
});

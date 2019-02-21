import React from "react";
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import "react-testing-library/cleanup-after-each";
// this adds jest-dom's custom assertions
import "jest-dom/extend-expect";
import { render as rtlRender } from "react-testing-library";
import { Provider } from "react-redux";
import { createTestStore } from "./store";

function render(ui, { initialState, store = createTestStore(initialState) } = {}) {
  return {
    ...rtlRender(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

global.renderWithStore = render;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

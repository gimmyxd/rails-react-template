import React from "react";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from ".";
describe("<Home />", () => {
  it("renders home page", async () => {
    render(<Home></Home>);

    expect(
      await screen.findByText("Rails 8 + React 19 Template")
    ).toBeVisible();
  });
});

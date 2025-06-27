import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("App.tsx", () => {
  it("Fails", () => {
    render(<h1>Hello</h1>);

    expect(true).toBeTruthy();
  });
});

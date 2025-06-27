import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkList from "./WorkList";

describe(WorkList, () => {
  it("Renders?", () => {
    render(<WorkList />);

    expect(screen.getByTestId("work-list")).not.toBeUndefined();
    expect(screen.getByTestId("btn-add")).not.toBeUndefined();
  });
});

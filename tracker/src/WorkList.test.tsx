import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import WorkList from "./WorkList";

describe(WorkList, () => {
  describe("when add clicked", () => {
    it("creates new work item ", async () => {
      render(<WorkList />);

      expect(screen.getByTestId("work-list")).not.toBeUndefined();
      screen.getByTestId("btn-add").click();

      await waitFor(() => {
        expect(screen.getByTestId("work-item-1")).not.toBeUndefined();
      });
    });
  });
});

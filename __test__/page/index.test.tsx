import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components
import Home from "@/pages/index";

describe("body", () => {
  describe("main section", () => {
    it("should have hello text ", () => {
      render(<Home />);

      const text = screen.getByText("Hello");

      expect(text).toBeInTheDocument();
    });
  });
});

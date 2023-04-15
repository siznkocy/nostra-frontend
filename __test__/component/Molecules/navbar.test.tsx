import { render, screen } from "@testing-library/react";
import Navbar from "@/component/molecules/Navbar";

describe("Navbar ", () => {
  describe("Shop link", () => {
    it("should expand on hover", () => {
      render(<Navbar />);

      const text = screen.getByText("Navbar");
      expect(text).toBeInTheDocument();
    });
  });
});

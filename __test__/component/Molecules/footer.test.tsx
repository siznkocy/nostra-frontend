import { render, screen } from "@testing-library/react";
import Footer from "@/component/molecules/Footer";

describe("Footer ", () => {
  describe("Links", () => {
    test("when clicked should make a request to tag", () => {
      render(<Footer />);
    });
  });
});

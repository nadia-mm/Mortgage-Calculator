import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  test("should render loading message", () => {
    render(<LoadingSpinner />);
    const message = screen.getByText("Loading...");
    expect(message).toBeInTheDocument();
  });
});

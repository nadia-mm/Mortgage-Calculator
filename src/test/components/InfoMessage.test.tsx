import { render, screen } from "@testing-library/react";
import { InfoMessage } from "../../components/InfoMessage";
import { data } from "../data";

describe("ErrorMessage component", () => {
  it("should render error message", async () => {
    const expectedMessage: string = "Please read the instructions";
    render(<InfoMessage message={expectedMessage} />);
    const infoMessageDiv = screen.getByTestId(data.infoMessage);
    const message = screen.getByText(`${expectedMessage}`);
    expect(infoMessageDiv).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});

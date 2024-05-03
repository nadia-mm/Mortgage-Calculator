import { render, fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { data } from "../data";

describe("Mortgage Calculator", () => {
  test("renders input fields and button", () => {
    render(<App />);
    const amountDiv = screen.getByTestId(data.loanAmountDiv);
    const rateDiv = screen.getByTestId(data.interestRateDiv);
    const lengthDiv = screen.getByTestId(data.lengthDiv);
    const calculateButton = screen.getByRole("button", {
      name: data.calculateButtonText,
    });

    expect(amountDiv).toBeInTheDocument();
    expect(rateDiv).toBeInTheDocument();
    expect(lengthDiv).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  test("calculates monthly mortgage when calculateButtonis clicked", () => {
    render(<App />);
    const amountInput = screen.getByTestId(data.loanAmountInput);
    const rateInput = screen.getByTestId(data.interestRateInput);
    const lengthInput = screen.getByTestId(data.lengthInput);
    const calculateButton = screen.getByRole("button", {
      name: data.calculateButtonText,
    });

    fireEvent.change(amountInput, { target: { value: 500000 } });
    fireEvent.change(rateInput, { target: { value: 3 } });
    fireEvent.change(lengthInput, { target: { value: 30 } });

    fireEvent.click(calculateButton);

    const monthlyMortgage = screen.getByText(
      "Your monthly mortgage will be $2,108"
    );
    expect(monthlyMortgage).toBeInTheDocument();
  });

  test("disables calculateButtonwhen any input field is empty", () => {
    render(<App />);
    const rateInput = screen.getByTestId(data.interestRateInput);
    const lengthInput = screen.getByTestId(data.lengthInput);
    const calculateButton = screen.getByRole("button", {
      name: data.calculateButtonText,
    });

    fireEvent.change(rateInput, { target: { value: 5 } });
    fireEvent.change(lengthInput, { target: { value: 30 } });

    expect(calculateButton).toBeDisabled();
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import { data } from "./data";

describe("App", () => {
  test("displays mortgage calculator inputs and button", async () => {
    render(<App />);
    await waitFor(() => {
      const mortgageCalculator = screen.getByTestId("mortgage-calculator");
      expect(mortgageCalculator).toBeInTheDocument();
    });
  });

  test("calculates monthly mortgage when button is clicked", async () => {
    render(<App />);

    const amountInput = screen.getByTestId(data.loanAmountInput);
    const rateInput = screen.getByTestId(data.interestRateInput);
    const lengthInput = screen.getByTestId(data.lengthInput);
    const calculateButton = screen.getByRole("button", {
      name: data.calculateButtonText,
    });

    userEvent.type(amountInput, "500000");
    userEvent.type(rateInput, "3");
    userEvent.type(lengthInput, "30");
    userEvent.click(calculateButton);

    const monthlyMortgage = screen.getByTestId("info-message");
    expect(monthlyMortgage).toBeInTheDocument();
  });

  test("disables button when any input field is empty", async () => {
    render(<App />);

    const calculateButton = screen.getByRole("button", {
      name: data.calculateButtonText,
    });
    expect(calculateButton).toBeDisabled();
  });
});

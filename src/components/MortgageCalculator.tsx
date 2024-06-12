import { useState, ChangeEvent, useEffect } from "react";
import { Input } from "./Input";
import { InfoMessage } from "./InfoMessage";
import { data } from "../test/data";

interface MortgageInputProps {
  amount: number;
  rate: number;
  length: number;
}

export const MortgageCalculator = () => {
  const [amount, setAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [total, setTotal] = useState<string | null>("");
  const [showTotal, setShowTotal] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setShowTotal(false);
    setIsDisabled(
      amount === 0 ||
        rate === 0 ||
        length === 0 ||
        Number.isNaN(amount) ||
        Number.isNaN(rate) ||
        Number.isNaN(length)
    );
  }, [amount, rate, length]);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleChangeRate = (e: ChangeEvent<HTMLInputElement>) => {
    setRate(parseInt(e.target.value));
  };

  const handleChangeLength = (e: ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };

  const calculateMontlyMortage = ({
    amount,
    rate,
    length,
  }: MortgageInputProps) => {
    const r: number = rate / 100 / 12;
    const n: number = length * 12;
    const result: number = Number(
      (amount * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))).toFixed(
        0
      )
    );
    setTotal(Number(result).toLocaleString("en-US"));
    setShowTotal(true);
  };

  return (
    <div
      data-testid={data.mortgageCaculatorApp}
      className="mortgage-calculator-container"
    >
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Mortgage Calculator
      </h3>
      <Input
        title={"Principal loan amount"}
        value={amount}
        onChange={handleChangeAmount}
        aria-label="Principal loan amount"
      />
      <Input
        title={"Interest rate"}
        value={rate}
        onChange={handleChangeRate}
        unit={"%"}
        aria-label="Interest rate"
      />
      <Input
        title={"Length of loan"}
        value={length}
        onChange={handleChangeLength}
        unit={"Years"}
        aria-label="Length of loan"
      />

      <button
        type="submit"
        className="forced-color-adjust-auto mb-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={isDisabled}
        onClick={() => calculateMontlyMortage({ amount, rate, length })}
        aria-label="Calculate"
      >
        Calculate
      </button>
      {showTotal && (
        <InfoMessage message={`Your monthly mortgage will be $${total}`} />
      )}
      {isDisabled && <InfoMessage message="Please enter all the inputs" />}
    </div>
  );
};

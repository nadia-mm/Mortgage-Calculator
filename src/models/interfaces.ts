import { ChangeEvent } from "react";

export interface InputProps {
  title: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
}

export interface MortgageInputProps {
  amount: number;
  rate: number;
  length: number;
}

export interface IMessage {
  message: string;
}

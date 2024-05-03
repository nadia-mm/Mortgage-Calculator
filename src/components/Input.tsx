import { InputProps } from "../models/interfaces";

export const Input = ({ title, value, onChange, unit }: InputProps) => (
  <div
    className="mb-4"
    data-testid={`${title.split(" ").join("-").toLocaleLowerCase()}-div`}
  >
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {title} {unit && `(${unit})`}
    </label>
    <input
      data-testid={`${title.split(" ").join("-").toLocaleLowerCase()}-input`}
      min="0"
      onChange={onChange}
      value={value} 
      type="number"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
);

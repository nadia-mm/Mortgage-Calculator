import { useState, useEffect } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { MortgageCalculator } from "./components/MortgageCalculator";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <div>{isLoading ? <LoadingSpinner /> : <MortgageCalculator />}</div>;
}

export default App;

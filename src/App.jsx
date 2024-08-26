import { useState } from 'react';
import LeftComponent from "./components/LeftComponent"
import RightComponent from "./components/RightComponent"

function App() {
  const [mortgageRepayment, setMortgageRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [monthlyInterestPayment, setMonthlyInterestPayment] = useState(0);
  const [totalInterestRepayment, setTotalInterestRepayment] = useState(0);

  function entryData(formData) {
    setMortgageRepayment(0);
    setTotalRepayment(0);
    setMonthlyInterestPayment(0);
    setTotalInterestRepayment(0);

    const montlyRate = (formData.interestRate / 100) / 12;
    const montlyPayment = formData.mortgageTerm * 12;
    
    if(formData.mortgageType === "Repayment") {
      const mortgageRepaymentResult = (formData.mortgageAmount * montlyRate * (1 + montlyRate)**montlyPayment) / ((1 + montlyRate)**montlyPayment - 1)

      const totalRepayment = mortgageRepaymentResult * montlyPayment;

      setMortgageRepayment(parseFloat(mortgageRepaymentResult));
      setTotalRepayment(parseFloat(totalRepayment));
    
    } else {
      const monthlyInterestPayment = formData.mortgageAmount * montlyRate;
      const totalInterestRepayment = monthlyInterestPayment * montlyPayment;

      setMonthlyInterestPayment(parseFloat(monthlyInterestPayment));
      setTotalInterestRepayment(parseFloat(totalInterestRepayment));
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate_100">
      <div className="bg-white md:flex md:shrink-0 md:grow-0 md:rounded-2xl overflow-hidden md:w-3/4 md:m-5 shadow-md">
        <LeftComponent entryData={entryData} />
        <RightComponent mortgageRepayment={mortgageRepayment} totalRepayment={totalRepayment} monthlyInterestPayment={monthlyInterestPayment} totalInterestRepayment={totalInterestRepayment} />
      </div>
    </div>
  )
}

export default App;

import { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonCalculate from "./ButtonCalculate";

function MortgageForm({entryData}) {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('');

  const handleMortgageAmountChange = (e) => setMortgageAmount(parseFloat(e.target.value));
  const handleMortgageTermChange = (e) => setMortgageTerm(parseFloat(e.target.value));
  const handleInterestRateChange = (e) => setInterestRate(parseFloat(e.target.value));
  const handleMortgageTypeChange = (e) => setMortgageType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      mortgageAmount,
      mortgageTerm,
      interestRate,
      mortgageType,
    };

    entryData(formData)
    // console.log('Form submitted with data:', formData);
  };
  return(
    <form className="font-jakarta-plus my-4" onSubmit={handleSubmit}>
      <label htmlFor="mortgage_amount" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md overflow-hidden mt-2 mb-4 border border-slate-500 focus-within:border-lime group">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 px-3 h-full flex items-center text-slate-700 text-sm group-focus-within:bg-lime">₤</span>
        <input 
          id="mortgage_amount" 
          type="text" 
          className="peer pl-12 py-[6px] w-full rounded-md focus:outline-none"
          onChange={handleMortgageAmountChange}
        />
      </div>

      <div className="lg:flex lg:justify-between lg:items-end lg:gap-2">
        <div className="lg:flex-grow">
          <label htmlFor="mortgage_term" className="text-sm text-slate_500">Mortgage Term</label>
          <div className="relative rounded-md overflow-hidden mt-2 mb-4 border border-slate-500 focus-within:border-lime group">
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300 px-3 h-full flex items-center text-slate-700 text-sm group-focus-within:bg-lime">years</span>
            <input 
              id="mortgage_term" 
              type="text" 
              className="pl-4 py-[6px] block w-full rounded-md focus:outline-none"
              onChange={handleMortgageTermChange}
            />
          </div>
        </div>
        
        <div className="lg:flex-grow">
          <label htmlFor="interest_rate" className="text-sm text-slate_500 border-slate_500">Interest Rate</label>
          <div className="relative rounded-md overflow-hidden mt-2 mb-4 border border-slate-500 focus-within:border-lime group">
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300 px-3 h-full flex items-center text-slate-700 text-sm group-focus-within:bg-lime">%</span>
            <input 
              id="interest_rate" 
              type="text" 
              className="pl-4 py-[6px] block w-full rounded-md focus:outline-none"
              onChange={handleInterestRateChange}
            />
          </div>
        </div>
      </div>
      
      <p className="text-sm text-slate_500 mb-2">Mortgage Type</p>
      <div className="rounded-md pl-3 py-[6px] flex items-center relative h-10 overflow-hidden">
        <input
          type="radio"
          id="repayment"
          value="Repayment"
          name="mortgageType"
          className="peer relative z-10 appearance-none w-4 h-4 border-2 border-slate_500 rounded-full checked:bg-[radial-gradient(circle_at_center,_hsl(61,_70%,_52%)_5px,_white_1px)] checked:border-lime"
          checked={mortgageType === 'Repayment'}
          onChange={handleMortgageTypeChange}
        />
        <div className="absolute inset-0 border border-slate_500 peer-checked:border-lime rounded-md w-full h-full peer-checked:bg-[#FAFAE0]"></div>
        <label htmlFor="repayment" className="inset-0 text-base text-slate_900 flex items-center font-bold  absolute left-0 pl-10">Repayment</label>
      </div>

      <div className="rounded-md pl-3 py-[6px] flex items-center relative h-10 overflow-hidden mt-2">
        <input
          type="radio"
          id="interest_only"
          value="Interest Only"
          name="mortgageType"
          className="peer relative z-10 appearance-none w-4 h-4 border-2 border-slate_500 rounded-full checked:bg-[radial-gradient(circle_at_center,_hsl(61,_70%,_52%)_5px,_white_1px)] checked:border-lime"
          checked={mortgageType === 'Interest Only'}
          onChange={handleMortgageTypeChange}
        />
        <div className="absolute inset-0 border border-slate_500 peer-checked:border-lime rounded-md w-full h-full peer-checked:bg-[#FAFAE0]"></div>
        <label htmlFor="interest_only" className="inset-0 text-base text-slate_900 flex items-center font-bold  absolute left-0 pl-10">Interest Only</label>
      </div>
      
      <ButtonCalculate />
    </form>
  )
}

MortgageForm.propTypes = {
  entryData: PropTypes.func
}

export default MortgageForm;
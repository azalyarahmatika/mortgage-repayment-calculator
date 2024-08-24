import ButtonCalculate from "./ButtonCalculate";

function MortgageForm() {
  return(
    <form className="font-jakarta-plus my-4">
      <label htmlFor="mortgage_amount" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md border overflow-hidden mt-2 mb-4 border-slate_500">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate_300 px-3 h-full flex items-center text-slate_700 text-sm">₤</span>
        <input 
          id="mortgage_amount" 
          type="text" 
          className=" pl-10 py-[6px] block w-full border-slate_500 rounded-md"
        />
      </div>

      <label htmlFor="mortgage_term" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md border overflow-hidden mt-2 mb-4 border-slate_500">
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate_300 px-3 h-full flex items-center text-slate_700 text-sm">years</span>
        <input 
          id="mortgage_term" 
          type="text" 
          className=" pl-10 py-[6px] block w-full border-slate_500 rounded-md"
        />
      </div>

      <label htmlFor="interest_rate" className="text-sm text-slate_500 border-slate_500">Interest Rate</label>
      <div className="relative rounded-md border overflow-hidden mt-2 mb-4 border-slate_500">
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate_300 px-3 h-full flex items-center text-slate_700 text-sm">%</span>
        <input 
          id="interest_rate" 
          type="text" 
          className=" pl-10 py-[6px] block w-full rounded-md"
        />
      </div>

      <p className="text-sm text-slate_500 mb-2">Mortgage Type</p>
      <div className="border border-slate_500 rounded-md pl-3 py-[6px] flex items-center">
        <input
          type="radio"
          id="repayment"
          value="Repayment"
        />
        <label htmlFor="repayment" className="pl-3 text-base text-slate_900 py-[2px] font-bold">Repayment</label>
      </div>

      <div className="mt-2 border border-slate_500 rounded-md pl-3 py-[6px] flex items-center">
        <input
          type="radio"
          id="repayment"
          value="Repayment"
        />
        <label htmlFor="repayment" className="pl-3 text-base text-slate_900 py-[2px] font-bold">Interest Only</label>
      </div>

      <ButtonCalculate />
    </form>
  )
}

export default MortgageForm;
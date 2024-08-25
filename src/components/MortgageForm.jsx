import ButtonCalculate from "./ButtonCalculate";

function MortgageForm() {
  return(
    <form className="font-jakarta-plus my-4">
      <label htmlFor="mortgage_amount" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md overflow-hidden mt-2 mb-4 border border-slate-500 focus-within:border-lime group">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 px-3 h-full flex items-center text-slate-700 text-sm group-focus-within:bg-lime">₤</span>
        <input 
          id="mortgage_amount" 
          type="text" 
          className="peer pl-12 py-[6px] w-full rounded-md focus:outline-none"
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
        />
        <div className="absolute inset-0 border border-slate_500 peer-checked:border-lime rounded-md w-full h-full peer-checked:bg-[#FAFAE0]"></div>
        <label htmlFor="repayment" className="inset-0 text-base text-slate_900 flex items-center font-bold  absolute left-0 pl-10 peer-checked:border-red">Repayment</label>
      </div>

      <div className="mt-2 rounded-md pl-3 py-[6px] flex items-center relative h-10 overflow-hidden">
        <input
          type="radio"
          id="interest_only"
          value="Repayment"
          name="mortgageType"
          className="peer relative z-10 appearance-none w-4 h-4 border-2 border-slate_500 rounded-full checked:bg-[radial-gradient(circle_at_center,_hsl(61,_70%,_52%)_5px,_white_1px)] checked:border-lime"      
        />
        <div className="absolute inset-0 border border-slate_500 peer-checked:border-lime rounded-md w-full h-full peer-checked:bg-[#FAFAE0]"></div>
        <label htmlFor="interest_only" className="inset-0 text-base text-slate_900 flex items-center font-bold  absolute left-0 pl-10 peer-checked:border-red">Interest Only</label>
      </div>
      
      <ButtonCalculate />
    </form>
  )
}

export default MortgageForm;
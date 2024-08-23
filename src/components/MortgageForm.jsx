function MortgageForm() {
  return(
    <form className="font-jakarta-plus my-4">
      <label htmlFor="mortgage_amount" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md border overflow-hidden mt-2">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate_300 px-3 h-full flex items-center">₤</span>
        <input 
          id="mortgage_amount" 
          type="text" 
          className=" pl-10 py-[6px] block w-full border-slate_700 rounded-md"
        />
      </div>

      <label htmlFor="mortgage_term" className="text-sm text-slate_500">Mortgage Amount</label>
      <div className="relative rounded-md border overflow-hidden mt-2">
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate_300 px-3 h-full flex items-center">years</span>
        <input 
          id="mortgage_term" 
          type="text" 
          className=" pl-10 py-[6px] block w-full border-slate_700 rounded-md"
        />
      </div>
    </form>
  )
}

export default MortgageForm;
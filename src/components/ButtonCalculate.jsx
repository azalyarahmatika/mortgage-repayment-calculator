function ButtonCalculate() {
  return(
    <button className="flex h-full w-full bg-lime rounded-full justify-center items-center py-3 mt-4 lg:w-3/4 md:mt-8 cursor-pointer">
      <img src="/images/icon-calculator.svg" alt="Calculator Icon" className="relative" />
      <p className="font-bold text-slate_900 text-base ml-2">Calculate Repayment</p>
    </button>
  )
}

export default ButtonCalculate;
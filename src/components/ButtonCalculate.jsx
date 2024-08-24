function ButtonCalculate() {
  return(
    <div className="flex bg-lime rounded-full justify-center items-center py-3 mt-4">
      <img src="/images/icon-calculator.svg" alt="Calculator Icon" />
      <button className="font-bold text-slate_900 text-base ml-2">Calculate Repayment</button>
    </div>
  )
}

export default ButtonCalculate;
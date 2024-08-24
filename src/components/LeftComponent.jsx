import MortgageForm from "./MortgageForm";

function LeftComponent() {
  return(
    <div className="font-jakarta-plus px-4 py-6 md:w-1/2">
      <h1 className="font-bold text-slate_900 text-lg">Mortgage Calculator</h1>
      <button className="underline text-sm text-slate_500">Clear All</button>
      <MortgageForm />
    </div>
  )
}

export default LeftComponent;
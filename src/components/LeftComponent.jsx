import PropTypes from 'prop-types';
import MortgageForm from "./MortgageForm";

function LeftComponent({entryData}) {
  return(
    <div className="font-jakarta-plus px-4 py-6 md:w-1/2 md:px-8">
      <div className="min-[900px]:flex min-[900px]:justify-between">
        <h1 className="font-bold text-slate_900 text-2xl">Mortgage Calculator</h1>
        <button className="underline text-sm text-slate_500 md:inline-block">Clear All</button>
      </div>
        
      <MortgageForm entryData={entryData} />
    </div>
  )
}

LeftComponent.propTypes = {
  entryData: PropTypes.func
}

export default LeftComponent;
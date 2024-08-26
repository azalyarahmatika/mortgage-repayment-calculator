import PropTypes from 'prop-types';
import MortgageForm from "./MortgageForm";

function LeftComponent({entryData}) {

  return(
    <div className="font-jakarta-plus px-4 py-6 md:w-1/2 md:px-8"> 
      <MortgageForm entryData={entryData} />
    </div>
  )
}

LeftComponent.propTypes = {
  entryData: PropTypes.func,
}

export default LeftComponent;
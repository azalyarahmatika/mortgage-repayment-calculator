import PropTypes from 'prop-types';
import DefaultDisplay from "./DefaultDisplay";
import ResultDisplay from "./ResultDisplay";

function RightComponent({
  mortgageRepayment, 
  totalRepayment, 
  monthlyInterestPayment, 
  totalInterestRepayment
  }) {
  return(
    <div className="px-4 py-4 bg-slate_900 md:w-1/2 md:rounded-bl-[5rem] md:px-8">
      {mortgageRepayment && totalRepayment > 0 || monthlyInterestPayment && totalInterestRepayment > 0 ? (
      <ResultDisplay mortgageRepayment={mortgageRepayment} totalRepayment={totalRepayment} monthlyInterestPayment={monthlyInterestPayment} totalInterestRepayment={totalInterestRepayment} />
      ) : <DefaultDisplay />}
    </div>
  )
}

RightComponent.propTypes = {
  mortgageRepayment: PropTypes.number,
  totalRepayment: PropTypes.number,
  monthlyInterestPayment:  PropTypes.number,
  totalInterestRepayment: PropTypes.number,
}

export default RightComponent;
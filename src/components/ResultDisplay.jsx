import PropTypes from 'prop-types';

function ResultDisplay({
  mortgageRepayment, 
  totalRepayment, 
  monthlyInterestPayment, 
  totalInterestRepayment}) 
  {

  const formatter = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return(
    <div className='text-slate_100 font-jakarta-plus flex flex-col h-full '>
      <div className=''>
        <p className='text-xl font-bold py-3'>Your results</p>
        <p className='text-sm text-slate_300 leading-6'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click &quot;calculate repayments&quot; again.</p>

        <div className="text-slate_300 bg-[#0E2532] mt-8 p-4 rounded-lg border-t-4 border-lime font-jakarta-plus">
          <div className="border-b border-slate_300 pb-4 mb-4">
            <p className='text-sm'>{mortgageRepayment > 0 ? `Your monthly repayments` : `Your monthly interest payment`}</p>
            <p className="mt-2 text-lime text-[36px] font-bold">{mortgageRepayment > 0 ?
            `₤${formatter.format(mortgageRepayment)}` : `₤${formatter.format(monthlyInterestPayment)}` }</p>
          </div>
          <div>
            <p className='text-sm'>{totalRepayment > 0 ? `Total you'll repay over the term` : `Total Interest you'll repay over the term`}</p>
            <p className="mt-2 text-slate_100 text-xl font-bold">{ totalRepayment > 0 ? `₤${formatter.format(totalRepayment)}` : `₤${formatter.format(totalInterestRepayment)}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

ResultDisplay.propTypes = {
  mortgageRepayment: PropTypes.number,
  totalRepayment: PropTypes.number,
  monthlyInterestPayment:  PropTypes.number,
  totalInterestRepayment: PropTypes.number,
}

export default ResultDisplay;
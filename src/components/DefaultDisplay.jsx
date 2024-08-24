import Illustration from '../../public/images/illustration-empty.svg'

function DefaultDisplay() {
  return(
    <div className='text-slate_100 font-jakarta-plus text-center flex items-center flex-col'>
      <div className=' h-full'>
        <img src={Illustration} alt="Empty Illustration" className='m-auto md:m-0' />
        <p className='text-lg font-bold py-3'>Results shown here</p>
        <p className='text-sm text-slate_300 px-5'>Complete the form and click &quot;calculate repayments&quot; to see what 
        your monthly repayments would be.</p>
      </div>
     
    </div>
  )
}

export default DefaultDisplay;
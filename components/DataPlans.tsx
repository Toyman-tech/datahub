import React from 'react'

const DataPlans = () => {
  return (
    <div className='flex flex-col justify-center align-middle gap-10 pt-[60px] bg-[#f8f8ff]'>
        <h1 className='flex text-center justify-center align-middle font-semibold text-[30px] p-3 ' >
            Affordable Data Plans And Prices
        </h1>
        <div className='flex flex-col md:flex-row  justify-center align-middle gap-5 text-center '>
            <div>MTN</div>
            <div>airtel</div>
            <div>Glo</div>
            <div>9mobile</div>
        </div>
    </div>
  )
}

export default DataPlans
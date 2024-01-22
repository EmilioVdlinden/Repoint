import React from 'react'

const StatsIcon = ({kpi, value, Icon}) => {

  return (
    <div className="flex items-center justify-between min-w-56 py-4 pl-3 pr-3 text-left shadow-md rounded-lg bg-white">
      <div className='flex flex-col'>
        <h1 className="block font-bold text-rebin-grey text-xs ">{kpi}</h1>
        <span className="block text-rebin-darkblue text-lg font-semibold truncate">{value}</span>
      </div>
      <div className='p-2 bg-rebin-blue rounded-lg '>
        <Icon className='h-5 w-auto text-white '/>
      </div>
       
    </div>
     
   

    
  )
}

export default StatsIcon;
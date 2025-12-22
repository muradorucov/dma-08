import React from 'react'
import Arrow from '../../assets/icons/arrow'

function Dropdown({title, tabs}) {
  return (
    <div className='px-7 py-4 group relative flex gap-2 items-center z-10'>
        {title}
        <Arrow className="group-hover:rotate-180 transition-all duration-200"/>
        <div className='bg-[#016BAF] min-w-[180px] p-4 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-200 absolute top-0'>
            {tabs.map((tab) => (
                <>
                    <div className='truncate cursor-pointer select-none hover:text-gray-300 transition-all duration-200'>{tab.name}</div>
                    <div className='h-[0.5px] bg-blue-300 w-full'></div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Dropdown
import TrendingCard from './TrendingCard'
import React, { useRef } from 'react'
import { FaAngleRight } from "react-icons/fa6";

function HorizontalScrollCard({data = [], heading, trending, media_type}) {

  return (
    <div className='container mx-auto px-5 my-20'>
      <div className='flex gap-2'>
        <div className='bg-orange-600 w-1 h-7 text-orange-600'>l</div>
        <h2 className='text-white font-bold text-xl mb-4'>{heading}</h2>
        <button  className='text-white flex mt-1 text-2xl'>
          <FaAngleRight/>
        </button>
      </div>
      <div className='relative'>
        <div className='w-auto grid grid-flow-col overflow-x-scroll md:grid-cols-[repeat(auto-fit,180px)] gap-2 overflow-hidden relative z-10 scroll-smooth transition-all scrollbar-none'>
          {data.map((data,index) => {
            return (
              <TrendingCard key={data.id+"heading"+index} data={data} index={index+1} trending={trending} media_type={media_type}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCard
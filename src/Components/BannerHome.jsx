import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { FaRegStar } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function BannerHome() {
    const bannerData = useSelector(state => state.movieData.bannerData)
    const imageURL = useSelector(state => state.movieData.imageURL)
    const [currentImage, setCurrentImage] = useState(0)
    
    const handleNext = () => {
        currentImage < bannerData.length - 1 && setCurrentImage(prev => prev + 1)
    }

    const handlePrev = () => {
        currentImage > 0 && setCurrentImage(prev => prev - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            currentImage < bannerData.length - 1 ? handleNext() : setCurrentImage(0)
        },5000)
        return () => clearInterval(interval)
    },[bannerData,currentImage])

  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden' >
            {
                bannerData.map((data,index) => {
                    return (
                        <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{ transform : `translateX(-${currentImage * 100}%)`}}>
                            <div className='w-full h-full'>
                                <img className='w-full h-full object-cover' src={imageURL+data.backdrop_path} />
                            </div>

                            <div className='absolute top-0 w-full h-full flex items-center justify-between px-4'>
                                <button onClick={handlePrev} className='text-white bg-slate-900 z-10 rounded p-1 text-2xl  active:bg-slate-200 active:text-slate-900 transition-all'>
                                    <FaAngleLeft/>
                                </button>
                                <button onClick={handleNext} className=' text-white bg-slate-900 z-10 rounded p-1 text-2xl active:bg-slate-200 active:text-slate-900 transition-all'>
                                    <FaAngleRight/>
                                </button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>

                            <div className='container mx-auto'>
                                <div className='w-full absolute bottom-0 max-w-md p-4'>
                                    <h2 className='font-bold text-xl lg:text-2xl text-white drop-shadow-2xl'>{data.title || data.name}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                    <div className='flex items-center gap-4'>
                                        <div className='flex gap-2 items-center'>
                                            <FaRegStar/>
                                            <p>{Number(data.vote_average).toFixed(1)}</p>
                                        </div>
                                        <span> | </span>
                                        <div className='flex gap-2 items-center'>
                                            <FaEye/>
                                            <p>{Number(data.popularity).toFixed(0)}+</p>
                                        </div>
                                        <div className='p-2'>
                                            <button className='bg-orange-600 p-2 py-1 text-black font-bold rounded bg-gradient-to-l from-red-600 to-orange-600 shadow-md hover:scale-95 transition-all'>Play Now</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default BannerHome
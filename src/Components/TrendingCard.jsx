import React from 'react'

import { useSelector } from 'react-redux'
import { FaRegStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdImageNotSupported } from "react-icons/md";


function TrendingCard({data,trending,index, media_type}) {
    const imageURL = useSelector(state => state.movieData.imageURL)
    const mediaType = data.media_type ?? media_type
    return (
        <Link to={'/'+mediaType+'/'+data.id} className='w-full min-w-[180px] max-w-[180px] overflow-hidden block h-70 rounded relative shadow-xl hover:scale-105 transition-all'>

            {
                data?.poster_path ? (
                    <img src={imageURL+data?.poster_path}/>
                ) : (
                    <div className=''>
                        <h3>Gambar rusak dari APInya...</h3>
                        <div className='h-full w-full flex items-center justify-center'>
                            <MdImageNotSupported className='w-32 h-52' />
                        </div>
                    </div>
                )
            }

            <div className='absolute top-4 text-[13px]'>
                {
                    trending && (
                        <div className='py-1 px-4 text-white bg-slate-900/80 backdrop-blur-3xl rounded overflow-hidden'>
                            # {index} Trending
                        </div>
                    )
                }
            </div>

            <div className='absolute bottom-0 h-12 backdrop-blur-3xl w-full text-white bg-slate-900/80 px-2 py-2'>
                <h2 className='text-ellipsis line-clamp-1 text-[14px] font-semibold'>{data.title || data.name}</h2>
                <div className='flex text-[9px] items-center justify-between'>
                    <h5 className='flex'>{data.first_air_date || data.release_date}</h5>
                    <h5 className='mr-2 underline uppercase cursor-pointer'>{data.media_type}</h5>
                    <div className='flex items-center gap-1'>
                        <FaEye/>
                        <h5>{Number(data.popularity).toFixed(0)}+</h5>
                        <FaRegStar className='ml-2'/>
                        <h5>{Number(data.vote_average).toFixed(1)}</h5>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default TrendingCard
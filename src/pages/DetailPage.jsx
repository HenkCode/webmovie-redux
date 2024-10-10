import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetail from '../hooks/useFetchDetail'
import { useSelector } from 'react-redux'
import Divider from '../Components/Divider'

function DetailPage() {
  const params = useParams()
  const imageURL = useSelector(state => state.movieData.imageURL)
  const {data} = useFetchDetail(`/${params?.explore}/${params?.id}`)
  const {data : castData} = useFetchDetail(`/${params?.explore}/${params?.id}/credits`)
  console.log('castdata', castData)
  const duration = (Number(data?.runtime)/60)?.toFixed(1)?.split('.')
  const writer = castData?.crew?.filter(el => el?.job === 'Writer')?.map(el => el?.name)?.join(', ')
  console.log('writer', writer)
  return (
    <div className='h-[1000px]'>
      <div className='w-full h-[300px] relative'>

        <div className='w-full h-full'>
          <img src={imageURL+data?.backdrop_path} alt="" className='h-full w-full object-cover'/>
        </div>

        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/95 to-transparent'></div>

      </div>

      <div className='container mx-auto px-4 py-16 lg:py-0 flex flex-col lg:flex-row lg:gap-10'>

        <div className='lg:-mt-32 mx-auto bottom-32 lg:bottom-0 lg:ml-3 lg:mx-0 w-fit relative min-w-60'>
          <img src={imageURL+data?.poster_path} alt="" className='h-60 w-40 object-cover rounded'/>
        </div>

        <div className=''>
          <h2 className='text-lg font-bold text-white'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400'>{data?.tagline}</p>
          <Divider/>
          <div className='flex items-center gap-3'>
            <p>Rating : {Number(data?.vote_average).toFixed(1)}</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>Duration : {duration[0]}h {duration[1]}m</p>
          </div>
          <div>
            <h3 className='text-white text-wl font-bold mb-1'>Sinopsis</h3>
            <p>{data?.overview}</p>
            <div className='flex items-center gap-3 my-3'>
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Release Date : {data?.release_date}</p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>
            <div>
              <p><span className='text-white'>Director</span> : {castData?.crew[0]?.name}</p>
              <p><span className='text-white'>Writer</span> : {writer}</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailPage
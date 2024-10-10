import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TrendingCard from '../Components/TrendingCard'

function ExplorePage() {
  const params = useParams()
  console.log('params', params.explore)
  const [pageNo, setPageNo] = useState(1)
  const [data,setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`,{
        params : {
          page : pageNo
        }
      })
      console.log('response', response)
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev + 1)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData()
  }, [params.explore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='pt-16 p-2'>
      <div className='flex items-center gap-2'>
          <div className='bg-orange-600 w-1 h-7 text-orange-600'>l</div>
          <h3 className='py-5 capitalize text-lg text-white font-semibold my-3'>
            Popular {params.explore}s
          </h3>
      </div>
      <div className='container mx-auto'>

        <div className='grid grid-cols-[repeat(auto-fit,170px)] justify-center gap-5'>
          {
            data.map((exploreData, index) => {
              return (
                <TrendingCard data={exploreData} key={exploreData.id+'exploreSection'} media_type={params.explore}/>
              )
            })
          }
        </div>
      </div>     
    </div>
  )
}

export default ExplorePage
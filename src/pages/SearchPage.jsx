import axios from 'axios'
import TrendingCard from '../Components/TrendingCard'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchPage() {
  const location = useLocation()
  const [data,setData] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`,{
        params : {
          query : location?.search.slice(3),
          page : 1
        }
      })
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  console.log('location', location)

  useEffect(() => {
    setPage(1)
    setData([])
    fetchData()
  }, [location?.search])

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='py-16'>
      <div className='lg:invisible my-2 mx-1 sticky top-[70px] z-30'>
        <input type="text" placeholder='Search here...' onChange={(e) => navigate(`/search?q=${e.target.value}`)} className='px-4 py-1 w-full text-lg bg-slate-900 text-white rounded-full'/>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-[repeat(auto-fit,170px)] justify-center py-5 gap-5'>
          {
            data.map((searchData, index) => {
              return (
                <TrendingCard data={searchData} key={searchData.id+'search'} media_type={searchData.media_type}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
import BannerHome from '../Components/BannerHome'
import axios from 'axios'
import HorizontalScrollCard from '../Components/HorizontalScrollCard'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Home() {
  const trendingData = useSelector(state => state.movieData.bannerData)
  const {data : topRatedData} = useFetch('/movie/top_rated')
  const {data : OnTheAirData} = useFetch('/tv/on_the_air')
  const {data : popularTvData} = useFetch('/tv/popular')

  return (
    <div>
      <BannerHome/>

      <HorizontalScrollCard data={trendingData} heading={'Trending'} trending={true}/>
      <HorizontalScrollCard data={topRatedData} heading={'Top Rated'} media_type={'movie'}/>
      <HorizontalScrollCard data={popularTvData} heading={'Popular TV Series'} media_type={'tv'}/>
      <HorizontalScrollCard data={OnTheAirData} heading={'On The Air'} media_type={'tv'}/>
    </div>
  )
}

export default Home
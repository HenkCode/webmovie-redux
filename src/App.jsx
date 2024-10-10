import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from 'axios'

import { setBannerData, setImageURL } from "./store/movieSlice"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MobileNav from "./Components/MobileNav"
import './App.css'

function App() {

  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))

    } catch (error) {

      console.log('error', error)
      
    }

  }

  const fetchConfiguration = async() => {
    try {
      const response = await axios.get('/configuration')
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))

    } catch (error) {

      console.log('error', error)
      
    }

  }

  useEffect(() =>{
    fetchTrendingData()
    fetchConfiguration()
  },[])

  return (
    <main className="pb-14 lg:pb-0">
      <Header/>
      <div className="min-h-[90vh]">
        <Outlet/>
      </div>
      <Footer/>
      <MobileNav />
    </main>
  )
}
export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { store } from './store/store'
import { Provider } from 'react-redux'

//import pages
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

import App from "./App";
import './index.css'

// set up axios
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : ":explore",
        element : <ExplorePage/>
      },
      {
        path : ":explore/:id",
        element : <DetailPage/>
      },
      {
        path : "search",
        element : <SearchPage/>
      },
    ]
  }

])


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  //</StrictMode>
)

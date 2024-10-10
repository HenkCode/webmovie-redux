import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

//import Icons
import logo from '../assets/logo.png'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from 'react-icons/io5'
import { navigation } from '../contants/navigation'

function Header() {

  const location = useLocation()
  const parsee = location?.search?.slice(3)?.split('%20')?.join('')
  const [searchInput, setSearchInput] = useState(parsee)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`)
    }
  },[searchInput])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <header className='fixed top-0 w-full h-16 bg-slate-900 bg-opacity-75 z-40'>
        <div className='container mx-full px-5 flex items-center h-full'>
          <Link to={"/"}>
            <h2 className='hover:scale-95 text-xl font-bold text-gray-200'>Henk<span className='text-orange-600'>Code.</span></h2>
          </Link>

          <nav className='invisible lg:visible lg:flex items-center gap-1 ml-5'>
            {navigation.map((nav,index) => {
              return (
                <div>
                  <NavLink key={nav.label} to={nav.href} className={({isActive}) => `px-2 hover:text-white ${isActive && "text-white underline underline-offset-2 transition-all"}`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })}
          </nav>
          <div className='ml-auto flex items-center gap-5'>
            <form className='flex items-center gap-2' onSubmit={handleSubmit}>
              <input type='text' placeholder='Search here...' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className='bg-transparent px-4 py-1 outline-none border-none text-white invisible lg:visible lg:block'/>
              <button className='text-xl text-white'>
                <IoSearchOutline/>
              </button>
            </form>
            <div className='w-7 h-7 rounded-full overflow-hidden cursor-pointer active:scale-75 transition-all'>
              <img src={userIcon} className='w-full h-full'/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
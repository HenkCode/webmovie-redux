import React from 'react'
import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className='lg:invisible h-14 bg-slate-900/80 fixed bottom-0 z-10 w-full'>
      <div className='flex items-center justify-between pt-2 h-full text-neutral-400'>
        {mobileNavigation.map((nav,index) => {
          return (
            <NavLink key={nav.label+"mobileNavigation"} to={nav.href} className={({isActive}) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
              <div className='text-xl'>
                {nav.icon}
              </div>
              <p className='text-sm'>{nav.label}</p>
            </NavLink>
          )
        })}
      </div>
    </section>
  )
}

export default MobileNav
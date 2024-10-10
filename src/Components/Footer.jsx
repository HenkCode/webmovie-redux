import React from 'react'
import { Link } from 'react-router-dom'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className='text-center text-sm bg-slate-900/80 py-2'>
      <div className='flex items-center justify-center p-2'>
        <button className='flex gap-4'>
          <FaTiktok/>
          <FaInstagram/>
          <FaXTwitter/>
          <FaYoutube/>
        </button>
      </div>
      <div className='flex items-center underline justify-center gap-4 p-2'>
        <Link to='/' >About</Link>
        <Link to='/' >Contact</Link>
      </div>
      <p className='text-sm p-2'>Created By Henk Radhitya.R</p>
    </footer>
  )
}

export default Footer
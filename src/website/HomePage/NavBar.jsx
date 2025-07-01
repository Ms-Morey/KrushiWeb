import React from 'react'
import { FaSearch } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdTextFields } from "react-icons/md";
import { FaSitemap } from "react-icons/fa6";
import Nav2 from './Nav2';
import Nav3 from './Nav3';

const NavBar = () => {
  return (
    <>
    <div className='bg-gray-700 flex text-white font-semibold justify-between h-10 '>
      <div className='flex items-center justify-start ml-2'>
      <div className=' h-full  flex items-center border-r border-gray-400 p-2'>Gov Of Odisha</div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'>aifdjo</div>
      </div>
      <div className='flex items-center justify-end gap-0 mr-10'>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'>Login</div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'>Register</div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'><FaSearch /></div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'><TbArrowBack /></div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'><FaMobileScreenButton/></div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'><MdTextFields/></div>
      <div className=' h-full  flex items-center border-l border-r border-gray-400 p-2'><FaSitemap/></div>
      <div className='ml-3'>difdjfak</div>
      </div>
    </div>
        <div><Nav2/></div>
        <div><Nav3/></div>
    </>
  )
}
// hey I am trying  to clone one of the website using react js and tailwind css could you help me with that ?


export default NavBar
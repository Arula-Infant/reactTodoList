import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between p-4 bg-sky-300'>
        <div>
            <h1 className='font-bold text-2xl'><NavLink to={"/"}>Hello Everyone</NavLink></h1>
        </div>
        <nav>
            <ul className='flex gap-9 items-center'>
                <li><NavLink to={"/"} className={({isActive}) => `${isActive ? "text-sky-600 outline px-2 py-1 rounded-2xl bg-gray-200 font-semibold":""}`}>Home</NavLink></li>
                <li><NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-sky-600 outline px-2 py-1 rounded-2xl bg-gray-200 font-semibold":""}`}>About</NavLink></li>
                <li><NavLink to={"/profile"} className={({isActive}) => `${isActive ? "text-sky-600 outline px-2 py-1 rounded-2xl bg-gray-200 font-semibold":""}`}>Profile</NavLink></li>
                <li><NavLink to={"/skill"} className={({isActive}) => `${isActive ? "text-sky-600 outline px-2 py-1 rounded-2xl bg-gray-200 font-semibold":""}`}>Skill</NavLink></li>
                <li><NavLink to={"/Contact"} className={({isActive}) => `${isActive ? "text-sky-600 outline px-2 py-1 rounded-2xl bg-gray-200 font-semibold":""}`}>Contact</NavLink></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

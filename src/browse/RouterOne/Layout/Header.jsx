import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between'>
        <div>
            <h1>Hello Dom</h1>
        </div>
        <nav>
            <ul className='flex items-center gap-14'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/profile"}>Profile</Link></li>
                <li><Link to={"/skill"}>SKill</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

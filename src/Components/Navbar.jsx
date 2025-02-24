import React from 'react'

const Navbar = () => {
  
  return (
    <nav className=' lg:shadow-none shadow-md shadow-red-300 flex justify-between mb-1 py-4 md:px-10 px-3 items-center '>
        <div className="logo">
            <img src="images/logo.png" alt="logo" className='cursor-pointer'/>
        </div>
        <div className="humburger cursor-pointer lg:hidden">
            <img src="images/menu_icon.png" alt="menu" />
        </div>
        <ul className='lg:flex gap-16 uppercase cursor-pointer font-medium text-lg hidden'>
            <li>Home</li>
            <li>about</li>
            <li>skating</li>
            <li>shop</li>
            <li>contact us</li>
        </ul>
        <div className="icon lg:flex hidden gap-12 cursor-pointer invert-[0.9]">
          <div><img src="images/user.svg" alt="user" /></div>
          <div><img src="images/search.svg" alt="search" /></div>
        </div>
    </nav>
  )
}

export default Navbar

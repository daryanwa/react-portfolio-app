import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutLineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo2.png'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-400 text-gray-800'>
        <img src={Logo} alt='logo' style={{width:'50px'}} />
        {/* menu */}
        
            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Work</li>
                <li>Experience</li>
            </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10   '>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile */}
        
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-400 flex flex-col justify-center items-center}'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Contact</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Experience</li>
            </ul>
       
        {/* Social */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className=' h-[60px] flex justify-between items-center ml-[-143px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-800' href='/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar
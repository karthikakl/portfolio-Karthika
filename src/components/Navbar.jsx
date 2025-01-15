import React from 'react'
import logo from '../assets/image/logo.png'
import { FaCode, FaGithub, FaLinkedin, } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
           {/* <a href='/' aria-label='Home'>
              <img src={logo} className='mx-2' width={50} height={33}
              alt='logo'/>
           </a> */}
           <FaCode className='m-8 flex items-center justify-center gap-4 text-2xl' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/karthika-kl-b839451bb/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'
            className='text-white hover:text-gray-700 transition-colors'>
            <FaLinkedin/>
            </a>
            <a href='https://github.com/karthikakl'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-white hover:text-gray-700 transition-colors'>
            <FaGithub/>
            </a>
            
        </div>
        
    </nav>
  )
}

export default Navbar

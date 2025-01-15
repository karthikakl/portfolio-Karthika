import React from 'react'
import { CONTACT } from '../constants'
import { SiMinutemailer } from 'react-icons/si';
import { motion } from 'framer-motion';

const Contact = () => {
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;
  return (
    <div className='border-t border-e-stone-900 pb-20'>

      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}} 
      className='my-10 text-center text-4xl'>Get in touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <SiMinutemailer className='text-6xl'/>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='my-4'>
            {CONTACT.address}
        </motion.p >
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}  
        className='my-4'>
            {CONTACT.phoneNo}
        </motion.p >
        <a href={emailLink} className='border-b text-lg text-gray-300 hover:bg-gray-800 '>
         {CONTACT.email}
         </a>

      </div>
    </div>
  )
}

export default Contact

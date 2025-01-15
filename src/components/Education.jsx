import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}} 
      className='my-20 text-center text-4xl'>Education</motion.h2>
      <div className='text-center'>
        <p className='text-lg font-bold'>{EDUCATION.degree}</p>
        <p className='text-lg'>{EDUCATION.department}</p>
        <p className='text-lg'>{EDUCATION.institution}</p>
        <p className='text-lg'>{EDUCATION.year}</p>
      </div>
    </div>
  )
}

export default Education

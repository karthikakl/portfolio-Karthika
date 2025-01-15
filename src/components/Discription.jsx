import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/image/profile.jpg';
import { DISCRIPTION_CONTENT  } from '../constants';

const containerVarients={
  hidden:{opacity:0 ,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}
 const childVariants={
  hidden:{opacity:0 ,x:-100},
  visible:{
    opacity:1,x:0,transition:{duration:0.5}
  }
 }
const Discription = () => {
  return (
    <div className='pb-2 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8 lg:mt-24'>
            <motion.img
              src={profile}
              alt='karthika'
              className='w-1/2 h-auto pt- border border-stone-900 rounded-3xl'
              width={650}
              height={650}
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.5}}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
        <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVarients}>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Karthika KL</motion.h2>
            <motion.span
              variants={childVariants}
              className='text-3xl tracking-tight bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent'
              style={{
                backgroundImage: 'linear-gradient(to right, #D6D3D1, #57534E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              MERN Stack Developer
            </motion.span>
            <motion.p  variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed
            tracking-tighter'>
                {DISCRIPTION_CONTENT }
            </motion.p>
            <motion.a 
            variants={childVariants}
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='bg-white rounded-full p-4 text-sm
             text-stone-800 mb-10 no-underline'>
                Download Resume
             </motion.a>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discription;

import React from 'react'
import Navbar from './components/Navbar'
import Discription from './components/Discription'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10' >
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
     
      <Navbar/>
      <Discription/>
      <Experience/>
      <Education/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
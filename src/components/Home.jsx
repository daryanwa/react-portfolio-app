import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'




const Home = () => {
  return (
    <div name='home' className='bg-slate-400 w-full h-screen' >
        {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>

        <p>Hi, my name is </p>
        <h1>Rostislav Parahnenko</h1>
        <h2>Im a Developer</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit itaque natus, tempora alias hic!</p>
      </div>
      <div>
        <button>
          View Work <HiArrowNarrowRight />
        </button>
      </div>

    </div>
  )
}

export default Home
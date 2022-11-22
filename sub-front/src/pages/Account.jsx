import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className="h-[400px] w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be788ce5-47b0-4942-abb1-2108bcdfb71d/IL-he-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix picture"
        />
        <div className='bg-black/60 fixed top-0 left-0 h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8 '>
<h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>

    </div>
    <SavedShows/>
    </>
  )
}

export default Account
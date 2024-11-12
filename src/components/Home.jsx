import React from 'react'

const Home = () => {
  return (
    <div className='  w-full flex justify-center  mt-8 r'>
      <div className=' w-6/12'> 
<div className='  full flex gap-4 justify-center m-5'>
      <input className='w-full rounded-lg p-1 text-xl   ' placeholder='Enter Title'  type="text" name="" id="" />
      <button className='bg-black text-white px-3 rounded-lg'> Submit</button>
      </div>

      <div className='w-full flex justify-center px-4'>
      <textarea className='w-full rounded-lg' rows={20} name="" id=""></textarea>
      </div>
      </div>
      
    </div>
  )
}

export default Home
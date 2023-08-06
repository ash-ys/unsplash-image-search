import React from 'react'

const Bar = ({ children }) => {
  return (
    <div className=" flex items-center py-10" style={{ backgroundColor: '#4B89EC'}}>
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-5'>Search Unsplash Images</h1>
        {children}
      </div>
    </div>
  )
}

export default Bar
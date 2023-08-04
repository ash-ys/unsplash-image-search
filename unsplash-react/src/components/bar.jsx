import React from 'react';

const bar = ({ children }) => {
  return (
    <div className='flex items-center py-10' style={{ backgroundColor: '#4B89EC', padding: '20px' }}>
      <div className='max-w-md mx-auto w-full'>
      <h1 className='text-white text-center text-2xl font-bold mb-5' style={{ color: '#fff', fontWeight: 'bold' }}>
        Search Unsplash Images
      </h1>
      {children}
    </div>
    </div>
  );
};

export default bar;

import React from 'react'
import CategorySidebar from './_components/CategorySidebar';

const layout = ({children}) => {
  return (
    <div className='grid grid-col-1 md:grid-cols-4 mt-10'>

      <div className=' hidden md:block'>
        <CategorySidebar/>
      </div>
      <div className='col-span-3'>
        {children}
      </div>
        
    </div>
  )
}

export default layout;
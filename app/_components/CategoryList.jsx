"use client" 
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CategoryList = ({categoryList}) => {

  const [seeAll , setSeeAll] = useState(false);

  useEffect(()=>{
    categoryList&&categoryList.length>5&&setSeeAll(true);
    // categoryList&&categoryList.length<5&&setSeeAll(false);

  },[]);
  return (
    <div>
      <div className='flex justify-end'>
        {seeAll&&categoryList.length>0&&
        <Link href={'/search/Cleaning'}>
        <h2>See All</h2>
        </Link>}
      </div>
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>

      

      {/* condition for skeleton effect : while categoryList have 0 value, show skeleton effect */}

      {categoryList.length >0 ? categoryList.map((category, index)=>index<=5&&(
        <Link href={'/search/'+category.name}  key={index} className='flex flex-col items-center justify-center gap-2 
        bg-purple-50 p-5 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out'>
            <Image src={category.icon.url} alt='icon' height={35} width={35}/>
            <h2 className='text-primary'>{category.name}</h2>
        </Link>
      ))
      :
        // Skeleton Effect 
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[120px] w-full bg-slate-300 animate-pulse rounded-lg'>

          </div>
        ))
       
      
      
      }
      
    </div>
    </div>
  )
}

export default CategoryList

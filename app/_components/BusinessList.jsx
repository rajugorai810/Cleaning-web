import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BusinessList = ({businessList, title}) => {
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[22px]'>{title}</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-6'>
            {businessList.length >0 ?
            businessList.map((business, index)=>(
                <Link href={'/details/'+business.id} key={index} className='shadow-md rounded-sm hover:shadow-lg hover:shadow-purple-500 transition-all ease-linear cursor-pointer hover:scale-105'>
                    <Image src={business?.images[0]?.url} alt='image' width={500} height={200} className='h-[150px] md:h-[250px] object-cover rounded-lg'/>
                    <div className='flex flex-col items-baseline p-3 gap-1'>
                        <h2 className='p-1 bg-purple-200 text-primary rounded-full text-[12px]'>{business.category.name}</h2>
                        <h2 className='font-bold text-lg'>{business.name}</h2>
                        <h2 className='text-primary '>{business.contactPerson}</h2>
                        <h2 className='text-gray-500 text-sm'>{business.address}</h2>
                        <Button className="rounded-full mt-2 hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-colors ease-in-out">Book Now</Button>
                    </div>

                </Link>
                
            ))
            :

            //skeleton effect 

            [1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className='w-full h-[300px] bg-slate-200 animate-pulse rounded-lg'>

                </div>

            ))
        }
        </div>
    </div>
  )
}

export default BusinessList
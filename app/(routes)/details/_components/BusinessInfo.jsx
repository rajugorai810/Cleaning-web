import { Button } from '@/components/ui/button';
import { Clock, Mail, MapPin, Share, User, Watch, WatchIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const BusinessInfo = ({business}) => {
  return business?.name&&(
    <div className='flex flex-col md:flex-row gap-5 items-center' >
        {/* <Image src={business?.images[0]?.url} alt='image' width={100} height={100}/> */}
        <Image src={business?.images[0].url} alt={business?.name} width={150} height={200}
        className='rounded-full h-[150px] object-cover'/>
        {/* <h2>{business.name}</h2> */}

        <div className='md:flex justify-between items-center w-full'>
            <div className='flex flex-col items-center md:items-baseline gap-2 mt-4 md:mt-0'>
                <h2 className='text-primary bg-purple-100 rounded-full p-1 px-3 text-lg'>{business.category.name}</h2>
                <h2 className='text-[40px] font-bold'>{business.name}</h2>
                <h2 className='flex gap-2 text-lg text-gray-500'><MapPin/>{business.address}</h2>
                <h2 className='flex gap-2 text-gray-400'><Mail/>{business.email}</h2>
            </div>

            <div className='flex flex-col gap-5 md:items-end items-center mt-4 md:mt-0'>
                <Button className="hidden md:block"><Share/></Button>
                <h2 className='flex gap-2 text-lg text-primary'><User/> {business.contactPerson}</h2>
                <h2 className='flex gap-2 text-md text-gray'><Clock/> Available form 8:00 AM to 6:00 PM</h2>

            </div>
        </div>
    </div>
  )
}

export default BusinessInfo;
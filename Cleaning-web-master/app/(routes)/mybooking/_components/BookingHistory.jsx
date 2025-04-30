import { Calendar, Clock, LocateIcon, MapPin, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const BookingHistory = ({bookingHistory}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {bookingHistory.map((item,index)=>(
            <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5'>
               {item.businessList.name && <Image src={item?.businessList?.images[0].url} alt='image' width={150} height={150} className='rounded-lg object-cover'/>}
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>
                        {item.businessList.name}
                    </h2>
                    <h2 className='flex gap-2 text-primary'>
                        <User/>{item.businessList.contactPerson}
                    </h2>
                    <h2 className='flex gap-2 text-gray-500'>
                        <MapPin/>{item.businessList.address}
                    </h2>
                    <h2 className='flex gap-2 text-gray-500'>
                        <Calendar/>
                        Service on :<span className='text-black'> {item.date}</span>
                    </h2>
                    <h2 className='flex gap-2 text-gray-500'>
                        <Clock/>
                        Service on :<span className='text-black'> {item.time}</span>
                    </h2>

                </div>
            </div>
        ))}
    </div>
  )
}

export default BookingHistory;
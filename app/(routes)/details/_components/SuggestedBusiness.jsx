'use client'
import { NotebookPen } from 'lucide-react';

import React from 'react'
import { Button } from '@/components/ui/button';
import { useState , useEffect } from 'react';
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import BookingSection from './BookingSection';


const SuggestedBusiness = ({business}) => {

    const [businessList, setBusinessList] = useState([]);

    useEffect(()=>{
      // console.log(params);
      business&&getBusinessList();
    },[business]);
  
    const getBusinessList =()=>{
      GlobalApi.getBusinessByCategory(business?.category?.name).then(resp=>{
        // console.log(resp);
        setBusinessList(resp?.businessLists);
      })
    }

  return (
    <div className='pl-10'>

      <BookingSection business={business}>
        <Button className="flex gap-2  mb-4 w-[180px] md:w-full">
            <NotebookPen/> 
             Book Appointment
        </Button>
      </BookingSection>
        

        <div className='hidden md:block'>
          <h2 className='font-bold text-lg m-4'>
            Similar Business
          </h2>

          <div className=''>
            {businessList&&businessList.map((item,index)=>(
                <Link href={'/details/'+item.id} key={index} className='flex gap-4 mb-4 p-2 hover:border-primary hover:border rounded-lg cursor-pointer hover:shadow-md'>
                  <Image src={item?.images[0]?.url} alt='imag' width={80} height={80} className='rounded-full'/>
                  <div className='gap-2'>
                    <h2 className='font-bold'>{item.name}</h2>
                    <h2 className='text-primary'>{item.contactPerson}</h2>
                    <h2 className='text-gray-400'>{item.address}</h2>
                  </div>
                </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SuggestedBusiness;
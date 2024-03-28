'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistory from './_components/BookingHistory';
import BookingCompleted from './_components/BookingCompleted';
import GlobalApi from '@/app/_services/GlobalApi';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';


const MyBooking = () => {

  const {user} = useUser();
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(()=>{
    user && GetUserBookingHistory();
  },[user]);


  const GetUserBookingHistory = ()=>{
    GlobalApi.getUserBookingHistory(user.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingHistory(resp?.bookings);
    })
  }

  // logic for booked and completed 
  const filterData =(type) =>{

    const result = bookingHistory.filter(item=> 
      type=='booked'?
      new Date(item.date)>new Date()
      : new Date(item.date) < new Date()
      );
      return result;
  }

  return (
    <div className='my-10 mx-5 md:mx-36'>
      <h2 className='font-bold text-[20px] my-2'>My Bookings</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className='w-full justify-start'>
          <TabsTrigger value="booked" >Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked" >
          <BookingHistory bookingHistory ={filterData('booked')}/>
        </TabsContent>
        <TabsContent value="completed">
          <BookingHistory bookingHistory={filterData('completed')}/>
        </TabsContent>
      </Tabs>

    </div>
    
  )
}

export default MyBooking;
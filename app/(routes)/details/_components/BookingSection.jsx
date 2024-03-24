'use client'
import React, { useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
  } from "@/components/ui/sheet"
  import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';


const BookingSection = ({children, business}) => {

    const [timeSlot, setTimeSlot]= useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [bookedSlot , setBookedSlot] = useState([]);
    const {user} = useUser();
    useEffect(()=>{
        getTime();
        
    },[]);

    const [date, setDate] = useState(new Date());

    const getTime = ()=>{
        const timeList =[];

        for(let i=8;i<12;i++){
            timeList.push({
                time:i+ ':00 AM'
            })
            timeList.push({
                time:i + ':30 AM'
            })
        }
        timeList.push({time:"12:00 PM"});
        timeList.push({time:"12:30 PM"});

        for(let i = 1; i<6;i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        timeList.push({time:"6:00 PM"});

        setTimeSlot(timeList)

    }

    const saveBooking= ()=>{
        GlobalApi.createNewBooking(business.id, date,selectedTime,user.primaryEmailAddress.emailAddress, user.fullName).then(resp=>{
            // console.log(resp);
            if(resp){
                // Toast message 
                setDate('');
                setSelectedTime('');
                toast("Service booked sucessfully")
            }
        },
        (e)=>{
            // Error toast message
            toast("Error while booking")
        })
    }

    useEffect(()=>{
        date&&BusinessBookedSlot();
    },[date])

    const BusinessBookedSlot = ()=>{
        GlobalApi.businessBookedSlot(business.id, date).then(resp=>{
            setBookedSlot(resp?.bookings);
        })
    }

    const isSlotBooked = (time)=>{
        return bookedSlot.find(item=>item.time==time);
    }

  return (
    <div>
        <Sheet>
  <SheetTrigger> {children}</SheetTrigger>
  <SheetContent className="overflow-auto">
    <SheetHeader>
      <SheetTitle>Book Service</SheetTitle>
      <SheetDescription>
        Select Date and Time slot to book service
        {/* date picker  */}
        <div className='flex flex-col  items-baseline'>    
            <h2 className='my-5 font-bold'>Select Date</h2>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        </div>

        {/* time slot picker  */}
        <h2 className='my-5 font-bold'>Select Time Slot</h2>
        <div className='grid grid-cols-3 gap-2'>
            {timeSlot.map((item, index)=>(
                <Button key={index} 
                disabled={isSlotBooked(item.time)}
                variant='outline'  
                className={`rounded-full p-2 px-3 hover:bg-primary hover:text-white ${selectedTime==item.time&&'bg-primary text-white'}`}
                onClick={()=>setSelectedTime(item.time)}>
                    {item.time}
                </Button>
            ))}
        </div>
      </SheetDescription>
    </SheetHeader>
    <SheetFooter className="mt-5">
          <SheetClose asChild>
            <div className='flex gap-5'>
                <Button variant='destructive' >Cancel</Button>
                <Button disabled={!(selectedTime&&date)} 
                onClick={()=>saveBooking()}
                >Book</Button>
            </div>

          </SheetClose>
        </SheetFooter>
  </SheetContent>
</Sheet>

       
    </div>
  )
}

export default BookingSection;
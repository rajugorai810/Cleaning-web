'use client'
import { Button } from '@/components/ui/button';
import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignedOut } from '@clerk/nextjs';



const Header = () => {

  

  
  const {user} = useUser();


  return(
    <div className='p-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-8 '>

            <Image src='/logo.svg' alt='logo' height={100} width={180} className='cursor-pointer'/> 

            <div className='md:flex items-center gap-6 hidden'>
                <Link href={'/'}><h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2></Link>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Download App</h2>
            </div>

        </div>
        <div>
            {
            user ?
              // <UserButton  afterSignOutUrl="/"/>
              
              
              <DropdownMenu>
                <DropdownMenuTrigger><Image src={user.imageUrl} alt='user' width={40} height={40} className='rounded-full'/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>My Booking</DropdownMenuItem>
                    <DropdownMenuItem> <SignOutButton> Log out</SignOutButton> </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              :
              <Link href={'/sign-in'}>
                <Button>Get Started</Button>
              </Link>
            }
        </div>
    </div>

  )
}

export default Header;
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import profile from '@/image/7c6c5d88e94501a481b5f732536c2851.png' 
import Link from 'next/link'

const Sidebar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center cursor-pointer justify-center rounded-4xl border border-solid border-[#C3D4E966] rounded-full w-[44px] h-[44px]">
          <Image
            src={profile}
            alt="Your Icon"
            width={44}
            height={44}
            className="object-cover rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/"}>Home</Link></DropdownMenuItem>
        <DropdownMenuItem>
      <Link href={"/category"}>Category</Link>    
          </DropdownMenuItem>
        <DropdownMenuItem>
        <Link href={"/Car-Details"}>Car Details</Link>  
          </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'/dashboard'}>Dashboard</Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Sidebar

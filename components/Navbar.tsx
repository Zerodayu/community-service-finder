import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { LayoutList, Album, Settings } from 'lucide-react'

const Navbar = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-start h-screen max-w-[10vh] p-2 outline'>
                <Image src="/vercel.svg" alt="Logo" width={30} height={50} />
            <div className='flex flex-col' >
                <Button className='w-fit' variant="ghost">
                    <LayoutList className='size-6'/>
                </Button>
                <Button className='w-fit' variant="ghost">
                    <Album className='size-6'/>
                </Button>
                <Button className='w-fit' variant="ghost">
                    <Settings className='size-6'/>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Navbar
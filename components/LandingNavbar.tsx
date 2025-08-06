import React from 'react'

import Link from 'next/link'
import {Button} from './ui/button'
import { Framer } from 'lucide-react'


const LandingNavbar = () => {
  return (
    <section className='fixed top-5 left-0 w-full z-20'>
        <div className='container mx-auto flex bg-background/20 backdrop-blur justify-between items-center border-2 rounded-full'>

            <div className='flex items-center justify-center bg-background rounded-full px-2 py-2'>
                <Framer className='size-5' />
            </div>
            
            <div>
                <Button variant="link" className='font-bold font-mono text-background'>
                    Features
                </Button>
                <Button variant="link" className='font-bold font-mono text-background'>
                    Team
                </Button>
                <Button variant="link" className='font-bold font-mono text-background'>
                    About us
                </Button>
                
                <Button>
                    <Link href="/login" className='text-lg font-mono font-bold'>
                    Sign-in
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default LandingNavbar
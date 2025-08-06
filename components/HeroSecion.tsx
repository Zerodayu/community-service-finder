import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Skeleton } from './ui/skeleton'

const HeroSecion = () => {
  return (
    <section className='flex flex-row items-center justify-between h-screen bg-foreground p-4 overflow-clip'>
            <div className='flex-1 text-background pl-10'>
                <h1 className='text-9xl font-bold'>COMMUNITY SERVICE FINDER</h1>
                <p className='mt-4 text-lg'>Find the best community services near you.</p>
                <Button variant='link' className='text-background font-mono font-bold text-lg p-8'>
                    <Link href="/login" className='flex items-center gap-2'>
                        Learn more
                        <ChevronRight className='size-5' />
                    </Link>
                </Button>
            </div>
            <div className='flex-1 grid grid-cols-2 text-background'>
                <div className='flex flex-col gap-10 pt-100'>
                    <Skeleton className='h-96 w-xs' />
                    <Skeleton className='h-96 w-xs' />
                    <Skeleton className='h-96 w-xs' />
                </div>
                <div className='flex flex-col gap-10 -pt-50'>
                    <Skeleton className='h-96 w-xs' />
                    <Skeleton className='h-96 w-xs' />
                    <Skeleton className='h-96 w-xs' />
                </div>
            </div>
    </section>
  )
}

export default HeroSecion
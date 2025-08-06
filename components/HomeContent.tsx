import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowRightIcon, SearchIcon, CircleFadingPlus, ListFilterPlus } from "lucide-react"

const HomeContent = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4">

        <div className="flex flex-row items-center justify-between gap-2 w-full">
          <Button>
            <CircleFadingPlus size={16} />
            Post
          </Button>
          
          <div className="relative flex-1 max-w-md">
            <Input
              variant="outline-blur"
              className="peer ps-9 pe-9"
              placeholder="Search..."
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <Button
              variant="ghost"
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
          <Button variant="ghost" className='px-6'>
            <ListFilterPlus size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export {HomeContent};
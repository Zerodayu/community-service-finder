import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Send, CircleEllipsis, Ellipsis } from "lucide-react"

const MsgsContent = () => {
  return (
    <section>
      <div className='flex flex-row items-start justify-center'>

        {/* sidebar */}
        <div className='hidden md:flex flex-1 flex-col items-start justify-start gap-4'>

          <div className='flex flex-row w-full items-center justify-center gap-2'>
            <div className='flex flex-row items-center gap-2 px-2'>
              <h1 className="font-bold font-mono">Messages</h1>
            </div>
          </div>

          <div className='flex flex-row w-full bg-secondary items-center justify-between gap-2 p-2 rounded-l-full'>
            <div className='flex flex-row items-center gap-2 px-2'>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg" alt="chatphoto" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-sm">Sample Post 1</h1>
            </div>
            <Button variant="ghost" className='flex items-center justify-center'>
              <Ellipsis className='flex-1 size-6' />
            </Button>
          </div>

          <div className='flex flex-row w-full items-center justify-between gap-2 p-2'>
            <div className='flex flex-row items-center gap-2 px-2'>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/9.x/shapes/svg" alt="chatphoto" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-semibold text-sm">Sample Post 2</h1>
            </div>
            <Button variant="ghost" className='flex items-center justify-center'>
              <Ellipsis className='flex-1 size-6' />
            </Button>
          </div>
        </div>
        

        {/* chatbox */}
        <div className='flex-4 h-[90vh] items-center gap-2 outline rounded-md'>
          <div className='flex flex-col items-center justify-between h-full p-2'>
            {/* header */}
            <div className='flex flex-col top-0 items-start justify-start gap-2 px-4 w-full'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-3'>
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg" alt="chatphoto" />
                    <AvatarFallback>CN</AvatarFallback>
                 </Avatar>
                  <h1 className='font-bold'>Sample Post 1</h1>
                  <p className='hidden md:flex text-muted-foreground ml-2'>Last seen: 2 hours ago</p>
                </div>
                <Button variant="ghost" className='flex items-center justify-center'>
                  <CircleEllipsis className='size-6' />
                </Button>
              </div>
              <div className='outline w-full'/>
            </div>
            <div className='flex-1' /> {/* Spacer to push content to bottom */}

            {/* messages list - moved to bottom */}
            <div className='flex flex-col items-end justify-end w-full mb-2 gap-4'>
              <div className='gap-2 w-full flex items-center'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-muted-foreground bg-muted py-2 px-4 rounded-full'>hello guysszz!!</p>
              </div>

              <div className='gap-2 w-full flex items-center'>
                <Avatar>
                  <AvatarImage src="https://github.com/leerob.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-muted-foreground bg-muted py-2 px-4 rounded-full'>Ayyo</p>
              </div>
              
              <div className='flex flex-row-reverse items-center gap-2 mb-2'>
                <Avatar>
                  <AvatarImage src="https://github.com/evilrabbit.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-primary bg-secondary py-2 px-4 rounded-full'>Umazing!</p>
              </div>

              <div className='gap-2 w-full flex items-center'>
                <Avatar>
                  <AvatarImage src="https://github.com/leerob.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-muted-foreground bg-muted py-2 px-4 rounded-full'>Idk</p>
              </div>
              
              <div className='gap-2 w-full flex items-center'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-muted-foreground bg-muted py-2 px-4 rounded-full'>okayyy</p>
              </div>
            </div>

            {/* message input and button */}
            <div className="flex w-full items-center gap-2 p-2">
              <Input type="text" placeholder="type your message..." />
              <Button type="submit" className="flex items-center justify-center">
                <Send size={16} />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {MsgsContent}
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  ArrowRightIcon,
  SearchIcon,
  CircleFadingPlus,
  ListFilterPlus,
  ArrowUpRight,
  BookmarkPlus,
  HeartPlus,
  CalendarFold,
  Clock,
  MapPin,
 } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

const posting = [
  {
    id: 1,
    icon: "https://api.dicebear.com/9.x/glass/svg",
    title: "Sample Post 1",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Tag..."]
  },
  {
    id: 2,
    icon: "https://api.dicebear.com/9.x/shapes/svg",
    title: "Sample Post 2",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Volunteer"]
  },
  {
    id: 3,
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Luis",
    title: "Sample Post 3",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Volunteer"]
  },
  {
    id: 4,
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=Jessica",
    title: "Sample Post 4",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Volunteer"]
  },
  {
    id: 5,
    icon: "https://api.dicebear.com/9.x/glass/svg?seed=Jessica",
    title: "Sample Post 5",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Volunteer"]
  },
  {
    id: 6,
    icon: "https://api.dicebear.com/9.x/glass/svg?seed=Sarah",
    title: "Sample Post 6",
    description: "This is a sample post description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    date: "2023-10-01",
    time: "12:00 PM",
    location: "New York",
    tag: ["Community", "Volunteer"]
  }
]

const HomeContent = () => {
  return (
    <section>
      <div className="sticky top-5 flex-col items-center justify-center gap-4 z-10">

        <div className="flex flex-row items-center justify-between gap-2 w-full">
          <div className='flex items-center gap-2'> 
            <Button>
              <CircleFadingPlus size={16} />
              <h1 className='hidden md:block'>Post</h1>
            </Button>
            
            <div className="relative flex-1">
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
          </div>
          <Button variant="ghost" className='px-6'>
            <ListFilterPlus size={16} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 rounded-md gap-4">
        {posting.map((post) => (
          <div key={post.id} className='bg-muted w-full mb-4 p-2 rounded-sm outline max-w-lg'>
            <Skeleton className='flex items-center justify-center bg-secondary w-full h-[20vh] rounded-sm'>
              <h1 className='text-muted-foreground'>no image</h1>
            </Skeleton>
            <div className='p-2'>
              <div className='flex flex-row items-center gap-2 p-2'>
                <Avatar>
                  <AvatarImage src={post.icon} alt="chatphoto" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='font-bold text-lg font-mono'>{post.title}</h1>
              </div>
              <p>{post.description}</p>
              <div className='flex flex-col items-start mt-4 text-sm gap-1'>
                <span className='flex flex-row items-center justify-center text-muted-foreground gap-1'><CalendarFold size={16} /> {post.date}</span>
                <span className='flex flex-row items-center justify-center text-muted-foreground gap-1'><Clock size={16} /> {post.time}</span>
                <span className='flex flex-row items-center justify-center text-muted-foreground gap-1'><MapPin size={16} /> {post.location}</span>
              </div>
              <div className='flex flex-wrap gap-2 mt-4 px-4'>
                {post.tag && post.tag.map((tag, index) => (
                  <span
                    key={index}
                    className='flex bg-primary text-primary-foreground w-content px-2 rounded-full font-mono text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between '>
              <Button variant="link" className="text-xs">
                  <ArrowUpRight size={16} />
                  View Details
              </Button>
              <Button variant="link" className="text-xs">
                <BookmarkPlus size={16} />
                Save
              </Button>
              <Button variant="link" className="text-xs">
                <HeartPlus size={16} />
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export {HomeContent};
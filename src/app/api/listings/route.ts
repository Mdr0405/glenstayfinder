import { NextResponse } from 'next/server'

const list = [
  { id: 1, room: 1, name: 'delux',  link: '/pic.jpeg' },

  { id: 2, room: 2, name: 'super delux', link: '/pic.jpeg' },
  { id: 3, room: 3, name: 'premium', link: '/pic.jpeg' },
  { id: 4, room: 4, name: 'luxury', link: '/pic.jpeg' },
  { id: 5, room: 5, name: 'suite', link: '/pic.jpeg' },
  { id: 6, room: 6, name: 'presidential', link: '/pic.jpeg' },
   { id: 7, room: 6, name: 'presidential', link: '/pic.jpeg' },
    { id: 8, room: 6, name: 'presidential', link: '/pic.jpeg' },
     { id: 9, room: 6, name: 'presidential', link: '/pic.jpeg' },
      { id: 0, room: 6, name: 'presidential', link: '/pic.jpeg' },
       { id: 23, room: 6, name: 'presidential', link: '/pic.jpeg' },
]


export async function GET() {
  return NextResponse.json(list)
}

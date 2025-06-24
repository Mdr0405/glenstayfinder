'use client'
import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import { useEffect, useState } from 'react' 
import axios from 'axios'
type ListingType = { 
  _id:string, 
  room: number;
  link: string;
  name: string;
}

export default function Listing() {
  const [Listing, setListings] = useState<ListingType[]>([])

  useEffect(() => {
    const fetchListings = async () => {
      try{
        const res = await axios.get('/api/rooms')
        setListings(res.data)
        console.log(res.data)
      }
      catch (error) {
        console.error('Error fetching listings:', error)
      } 
    }

    fetchListings()
  }, [])
  return (
    <div className="flex mt-15">

      <div className="flex overflow-x-scrollable gap-4 py-4">
        {Listing.map(item => (
          <ListingCard
            key={item.room}
            _id={item._id}
            room={item.room}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}





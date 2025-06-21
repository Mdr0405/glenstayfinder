'use client'
import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import { useEffect, useState } from 'react' 

type ListingType = {  
  id: number;
  room: number;
  link: string;
  name: string;
}

export default function Listing() {
  const [Listing, setListings] = useState<ListingType[]>([])

  useEffect(() => {
    const fetchListings = async () => {
      const res = await fetch('/api/listings')
      const data = await res.json()
      setListings(data)
    }

    fetchListings()
  }, [])
  return (
    <div className="flex mt-15">

      <div className="flex overflow-x-scrollable gap-4 py-4">
        {Listing.map(item => (
          <ListingCard
            key={item.id}
            id={item.id}
            room={item.room}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}





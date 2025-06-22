'use client';
import React from 'react';
import Image from 'next/image';

type ListingCardProps = {
  _id:string,
  room: string;
  link: string;
  name: string;
};

export default function ListingCard({ room, link, name }: ListingCardProps) {
  const handleComponentClick = () => {
    console.log(`Card ${room} clicked`);
    
  };

  return (
    <div className="bg-white text-black w-64 rounded-lg p-4 shadow-lg">
      <button onClick={handleComponentClick} className="w-full focus:outline-none">
        <Image
          src={link}
          alt={name}
          width={256}
          height={160}
          className="rounded object-cover w-full h-40"
        />
      </button>
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p>Room: {room}</p>
      {/* <p>ID: {id}</p> */}
    </div>
  );
}

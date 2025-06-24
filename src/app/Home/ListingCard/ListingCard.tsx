'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type ListingCardProps = {
  // _id:string,
  room: number;
  link: string;
  name: string;
};

export default function ListingCard({ room, link, name }: ListingCardProps) {
  const router = useRouter();
  const handleComponentClick = () => {
    console.log(`Card ${room} clicked`);
    router.push(`/room/${room}`); // Navigate to the room page
    // You can also pass additional data if needed, e.g., router.push(`/rooms/${room}`, { state: { name } });
  }
  return (
    <div className="bg-white text-black w-64 rounded-lg p-4 shadow-lg">
      <button onClick={handleComponentClick} className="w-full focus:outline-none hover:scale-105 transition-transform">
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

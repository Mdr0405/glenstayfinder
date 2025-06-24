'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
type RoomPageProps = {
  params: Promise<{ id: number }>;
};

export default function Page({ params }: RoomPageProps) {
  const { id } = React.use(params); // Unwrap route param
  const [roomData, setRoomData] = useState<any>(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('/api/roomdetail', {
          params: { id },
        });
        setRoomData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [id]);

  if (!roomData) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <h1 className="text-3xl font-bold mb-4">{roomData.name}</h1>
      <p className="mb-2 text-lg">{roomData.description}</p>
      <p className="mb-2">Price: ₹{roomData.price}</p>
      <p className="mb-2">Location: {roomData.location}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {roomData.images.map((src: string, index: number) => (
          <Image
            key={index}
            src={src.replace(',', '')} // Remove accidental trailing commas
            alt={`Room ${index + 1}`}
            className="w-64 h-40 object-cover rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

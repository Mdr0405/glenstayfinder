'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type RoomPageProps = {
  params: Promise<{ id: number }>;
};

type RoomData = {
  name: string;
  room: number;
  description: string;
  price: number;
  location: string;
  images: string[];
};

export default function Page({ params }: RoomPageProps) {
  const { id } = React.use(params);
  const [roomData, setRoomData] = useState<RoomData | null>(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('/api/roomdetail', {
          params: { id },
        });
        setRoomData(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [id]);

  if (!roomData) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 text-black">
      <h1 className="text-3xl font-bold mb-4">{roomData.name}</h1>
      <p className="mb-2 text-lg">{roomData.description}</p>
      <p className="mb-2">Price: ₹{roomData.price}</p>
      <p className="mb-2">Location: {roomData.location}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {roomData.images.map((src, index) => (
          <img
            key={index}
            src={src.replace(',', '')}
            alt={`Room ${index + 1}`}
            className="w-64 h-40 object-cover rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

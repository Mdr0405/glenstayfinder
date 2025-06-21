'use client';
import Listing from "./Listing/Listing";
export default function Home() {
  
  return (
    <div className="flex flex-col overflow-y-hidden text-white px-6">
      <h1 className="text-3xl text-bold absolute mb-8">Cards</h1>
      <Listing/>
    </div>
  );
}
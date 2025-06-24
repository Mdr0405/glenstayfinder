import { connectToDB } from '@/lib/mongodb';
import Listing from '@/models/Listings';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();

  const rooms = await Listing.find();
  return NextResponse.json(rooms, { status: 200 });
}



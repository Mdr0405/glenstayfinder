import { connectToDB } from '@/lib/mongodb';
import Listing from '@/models/Listings';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();
  const listings = await Listing.find();
  return NextResponse.json(listings);
}



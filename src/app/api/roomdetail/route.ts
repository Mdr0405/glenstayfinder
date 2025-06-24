// src/app/api/roomdetail/route.ts
import Detail from "@/models/Details";
import { connectToDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const room = searchParams.get("id");

  if (!room) {
    return NextResponse.json({ error: "Room ID is required" }, { status: 400 });
  }

  try {
    await connectToDB();

    const roomDetails = await Detail.findOne({ room: parseInt(room) });

    if (!roomDetails) {
        console.error("No room details found for ID:", room);
      return NextResponse.json({ message: "No room details found" }, { status: 404 });
    }

    return NextResponse.json(roomDetails, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

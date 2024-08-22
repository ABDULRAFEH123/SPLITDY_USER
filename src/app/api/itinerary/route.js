import dbConnect from "../../../lib/dbConnect";
import mongoose from "mongoose"; // Import mongoose
import { Itinerary } from "../../../lib/models/allShemas";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  // console.log(mongoose.connection.name, "Database Name");  // Log the database name

  try {
    // console.log("Connected to DB");  // Log database connection
    // Fetching itineraries
    const itineraries = await Itinerary.find({}).populate("prices");
    // console.log(itineraries, "Fetched itineraries with populated prices");

    // console.log(itinerary, "Fetched itineraries");  // Log fetched data
    return NextResponse.json(itineraries, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error); // Log errors
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

import dbConnect from "../../../lib/dbConnect";
import { AccommodationType } from "../../../lib/models/allShemas";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await dbConnect();

  try {
    const accommodations = await AccommodationType.find({});
    // console.log(accommodations, "Fetched accommodations");

    return NextResponse.json(accommodations, { status: 200 });
  } catch (error) {
    console.error("Error fetching accommodation data:", error);
    return NextResponse.json(
      { error: "Failed to fetch accommodation data" },
      { status: 500 }
    );
  }
}

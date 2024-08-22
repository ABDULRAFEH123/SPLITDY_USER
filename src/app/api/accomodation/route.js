import { NextResponse } from "next/server";
import { db } from "../../../lib/db/db"; // Import Prisma client from your db.js file

export async function GET(req, res) {
  try {
    console.log("Connecting to database...");
    console.log("Database connected.");

    const accommodations = await db.accommodation.findMany(); // Fetch all accommodations using Prisma
    console.log(accommodations, "Fetched accommodations");

    return NextResponse.json(accommodations, { status: 200 });
  } catch (error) {
    console.error("Error fetching accommodation data:", error);
    return NextResponse.json(
      { error: "Failed to fetch accommodation data" },
      { status: 500 }
    );
  }
}

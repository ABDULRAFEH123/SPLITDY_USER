import dbConnect from "../../../lib/dbConnect";
import {  Category } from "../../../lib/models/allShemas";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await dbConnect();

  try {
    const categories = await Category.find({});
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching accommodation data:", error);
    return NextResponse.json(
      { error: "Failed to fetch accommodation data" },
      { status: 500 }
    );
  }
}

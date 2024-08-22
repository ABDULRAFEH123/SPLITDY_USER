// app/api/signup/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { User } from "../../../lib/models/allShemas";

export async function POST(req) {
  try {
    console.log("Connecting to database...");
    await dbConnect(); // Connect to the database
    console.log("Database connected.");

    const { email, username, password } = await req.json();
    console.log("Received data:", { email, username, password });

    // Basic validation
    if (!email || !password) {
      console.log("Validation failed: Email and password are required.");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if the email already exists
    console.log("Checking if email already exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already exists:", email);
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    console.log("Hashing the password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed.");

    // Create the user
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });
    console.log("User object created:", user);

    await user.save();
    console.log("User saved to database.");

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}

import User from "@/models/userData";
import { connectMongoDB } from "@/mongodb/mongodb";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    // console.log("Name:",name);
    // console.log("Email:",email);
    // console.log("password:",password);

    await connectMongoDB()
    await User.create({name,email,password})

    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while singup" },
      { status: 500 }
    );
  }
}


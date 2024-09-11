import run from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    await run();
    return new NextResponse("connected");
}
import { NextRequest } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: NextRequest) {
  const { roomId } = await req.json();
  if (!roomId) {
    return new Response(JSON.stringify({ msg: "Not a valid room" }))
  }
}

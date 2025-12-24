import { NextResponse } from "next/server";
import { redis } from '@/lib/redis';
import { nanoid } from "nanoid";
import { Room,CreateRoomResponse,ErrorResponse } from "@/types/room";

export async function POST() {
  const roomId = nanoid(6);
  
  try {
    const now = Date.now();
    const expiresAt = now + (10 * 60 * 1000);

    const roomMeta: Room = {
      id: roomId,
      createdAt: now,
      expiresAt: expiresAt,
      userCount: 0
    };

    await redis.setex(
      `room:${roomId}:meta`,
      600,
      JSON.stringify(roomMeta)
    );

    const response: CreateRoomResponse = {
      roomId,
      expiresAt,
      expiresIn: 600
    };

    return NextResponse.json(response, { status: 201 });
    
  } catch (e) {
    console.error('Failed to create room:', e);
    
    const error: ErrorResponse = {
      error: e instanceof Error ? e.message : 'Failed to create room'
    };
    
    return NextResponse.json(error, { status: 500 });
  }
}

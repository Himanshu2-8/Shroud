import { redis } from '@/lib/redis'
import { nanoid } from "nanoid";

export interface Room {
  id: string;
  createdAt: number;
  expiresAt: number;
  userCount: number;
}

export async function POST() {
  const id = nanoid(6);
  try {
    const now = Date.now();
    const expiresAt = now + (10 * 60 * 1000);

    const roomMeta: Room = {
      id: id,
      createdAt: now,
      expiresAt: expiresAt,
      userCount: 0
    };

    await redis.setex(
      `room:${id}:meta`,
      600,
      JSON.stringify(roomMeta)
    );

    return new Response(JSON.stringify({ msg: "Room created successfully", id: id }), {
      status: 201
    })
  } catch (e) {
    if (e instanceof Error) {
      return new Response(JSON.stringify(e));
    }
    else {
      return new Response(JSON.stringify({ msg: "Failed to create Room" }));
    }
  }

}

import { NextRequest } from "next/server";
import { redis } from "@/lib/redis";
import Router from "next/router";

export async function GET(req: NextRequest) {
    const roomId = req.body;
    if (!roomId) {
        return new Response("Room ID is required", { status: 400 })
    }

    const room = await redis.get(`room:${roomId}`);
    if (!room) {
        return new Response("Room not found", { status: 404 })
    }

    Router.push(`/room/${roomId}`);
}
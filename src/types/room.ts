// types/room.ts
export interface Room {
    id: string;
    createdAt: number;
    expiresAt: number;
    userCount: number;
}

export interface CreateRoomResponse {
    roomId: string;
    expiresAt: number;
    expiresIn: number;
}

export interface ErrorResponse {
    error: string;
    roomExpired?: boolean;
}
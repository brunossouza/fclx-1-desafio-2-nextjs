import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const chats = await prisma.chats.findMany();
    return new Response(JSON.stringify(chats));
}

export async function POST(request: Request) {
    const body = await request.json();
    const chat = await prisma.chats.create({ data: body });
    return new Response(JSON.stringify(chat));
}
import { NextResponse } from "next/server"

export const GET = async (request:Request) => {
    return NextResponse.json({message:"Hello! The api is working!"},{status:200});
}
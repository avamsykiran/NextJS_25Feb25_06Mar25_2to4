import { getContactById, removeContact } from "@/lib/ContactsRep";
import { NextResponse } from "next/server"

export const GET = async (request:Request, {params}:any) => {
    let id = params.id;
    let contact = await getContactById(Number(id));
    return contact ? NextResponse.json(contact,{status:200}) : NextResponse.json({},{status:404});
}

export const DELETE = async (request:Request, {params}:any) => {
    let id = params.id;
    await removeContact(Number(id));
    return NextResponse.json({},{status:204});
}

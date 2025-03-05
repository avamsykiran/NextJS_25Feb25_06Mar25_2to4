import { addContact, getAllContacts, replaceContact } from "@/lib/ContactsRep";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server"

export const GET = async (request:Request) => {
    let contacts = await getAllContacts();
    return NextResponse.json(contacts,{status:200});
}

export const POST = async (request:Request) => {

    let contact = await request.json() as Contact;

    let contacts = await addContact(contact);
    return NextResponse.json({contact},{status:201});
}

export const PUT = async (request:Request) => {

    let contact = await request.json() as Contact;

    let contacts = await replaceContact(contact);
    return NextResponse.json({contact},{status:202});
}


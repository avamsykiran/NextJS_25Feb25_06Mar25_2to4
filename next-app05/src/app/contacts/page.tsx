
import ContactsList from "@/components/ContactsList";
import { getAllContacts, removeContact } from "@/lib/ContactsRep";
import { redirect } from "next/navigation";

const Contacts = async () => {

    let contacts = await getAllContacts();

    //server action for deleting a contact
    async function del(id:number) {
        'use server'
     
        await removeContact(id);
        redirect("/contacts");
    }

    return <ContactsList contacts={contacts} del={del} />
};

export default Contacts;
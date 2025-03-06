import ContactForm from "@/components/ContactForm";
import { addContact } from "@/lib/ContactsRep";
import Contact from "@/models/Contact";
import { redirect } from "next/navigation";

const AddContact = async () => {

    //server action for adding a contact
    async function save(contact:Contact) {
        'use server'

        await addContact(contact);
        redirect("/contacts");
    }

    return < ContactForm save={save} />
};

export default AddContact;
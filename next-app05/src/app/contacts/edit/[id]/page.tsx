import ContactForm from "@/components/ContactForm";
import { getContactById, replaceContact } from "@/lib/ContactsRep";
import { redirect } from "next/navigation";

const EditContact = async ({ params }: { params: Promise<{ id: string }> }) => {

    let { id } = await params;

    let contact = await getContactById(Number(id));

    //server action for adding a contact
    async function save(contact: Contact) {
        'use server'

        await replaceContact(contact);
        redirect("/contacts");
    }

    return <ContactForm contact={contact} isEditing={true} save={save} />;
    
};

export default EditContact;
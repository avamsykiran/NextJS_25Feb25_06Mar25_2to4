"use client"

import Contact from "@/models/Contact";
import Link from "next/link";

const ContactsList = ({ contacts,del }: { contacts: Contact[],del: (id:number) => void }) => (

    <section className="col-sm-10">
        <h3>Contacts Page</h3>

        <table className="table table-hover table-border table-striped">
            <thead>
                <tr>
                    <th>Contact#</th>
                    <th>Full Name</th>
                    <th>Mobile</th>
                    <th>Mail Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts && (contacts.length > 0) &&
                    contacts.map(c => (
                        <tr key={c.contactId}>
                            <td>{c.contactId}</td>
                            <td>{c.fullName}</td>
                            <td>{c.mobile}</td>
                            <td>{c.mail}</td>
                            <td>
                                <Link className="btn btn-sm me-1" href={`/contacts/edit/${c.contactId}`}>
                                    <i className="bi bi-pen" ></i>
                                </Link>
                                <button className="btn btn-sm" onDoubleClick={_e => del(c.contactId)}>
                                    <i className="bi bi-trash" ></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </section>
);

export default ContactsList;
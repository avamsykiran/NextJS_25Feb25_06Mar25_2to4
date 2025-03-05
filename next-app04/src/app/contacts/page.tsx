"use client"

import { getAllContactsFromApi, removeContactByIdFromApi } from "@/lib/ContactsApiCalls";
import Contact from "@/models/Contact";
import { useEffect, useState } from "react";

const Contacts = () => {

    let [contacts, setContacts] = useState<Contact[]>([]);
    let [loading, setLoading] = useState<boolean>(false);
    let [err, setErr] = useState<string | null>(null);

    const loadData = () => {
        setLoading(true);

        getAllContactsFromApi()
            .then(resp => {
                setContacts(resp.data);
                setLoading(false);
                setErr(null);
            })
            .catch(exception => {
                console.error(exception);
                setErr("Unable to load data! Please retry!");
                setLoading(false);
            });
    }

    const del = (id: number) => {
        setLoading(true);
        removeContactByIdFromApi(id)
            .then(resp => {
                loadData();
            })
            .catch(exception => {
                console.error(exception);
                setErr("Unable to remove! Please retry!");
                setLoading(false);
            });
    }

    useEffect(loadData, []);

    return (
        <section className="col-sm-10">
            <h3>Contacts Page</h3>

            {loading &&
                <div className="alert alert-info p-4 m-2"><strong>Please wait while laodiong data ... </strong></div>
            }

            {err &&
                <div className="alert alert-danger p-4 m-2"><strong> {err} </strong></div>
            }

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
                                    <button className="btn btn-sm" onDoubleClick={ _e => del(c.contactId) }>
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
};

export default Contacts;
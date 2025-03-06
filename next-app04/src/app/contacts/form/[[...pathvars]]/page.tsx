"use client"

import { addContactIdFromApi, getContactByIdFromApi, replaceContactIdFromApi } from "@/lib/ContactsApiCalls";
import Contact from "@/models/Contact";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {

    const router = useRouter();
    const { pathvars } = useParams();

    const [err, setErr] = useState<string | null>(null);
    
    const [isEditing,setEditing] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Contact>();

    const onSubmit = handleSubmit((data) => {

        let contact:Contact = {
            contactId:Number(data.contactId),
            fullName:data.fullName,
            mail:data.mail,
            mobile:data.mobile
        };

        (isEditing? 
            replaceContactIdFromApi(contact) : 
            addContactIdFromApi(contact))      
            .then(_resp => {
                router.push("/contacts");
            })
            .catch(exception => {
                console.log(exception);
                setErr("Unable to save data! Please retry");
            })
    });

    useEffect(() => {
        if (pathvars && pathvars.length > 0) {
            let id = Number(pathvars[0]);
            getContactByIdFromApi(id)
                .then(resp => {
                    reset(resp.data);                 
                    setEditing(true);
                })
                .catch(exception => {
                    console.log(exception);
                    setErr("Unable to load data! Please retry");
                })
        }
    }, [pathvars]);

    return (
        <section className="col-sm-5 mx-auto" >
            <h3>Contact Form</h3>

            {err &&
                <div className="alert alert-danger p-4 m-2"><strong> {err} </strong></div>
            }

            <form onSubmit={onSubmit}>
                <div className="p-1">
                    <label>Contact Id</label>
                    <input type="number" {...register("contactId", { required: true })} className="form-control" readOnly={isEditing} />
                    {errors.contactId?.type === "required" && <span className="text-danger">This Field is mandate</span>}
                </div>
                <div className="p-1">
                    <label>Full Name</label>
                    <input type="text" {...register("fullName", { required: true })} className="form-control" />
                    {errors.fullName?.type === "required" && <span className="text-danger">This Field is mandate</span>}
                </div>
                <div className="p-1">
                    <label>Mobile Number</label>
                    <input type="text" {...register("mobile", { required: true })} className="form-control" />
                    {errors.mobile?.type === "required" && <span className="text-danger">This Field is mandate</span>}
                </div>
                <div className="p-1">
                    <label>Mail Id</label>
                    <input type="text" {...register("mail", { required: true })} className="form-control" />
                    {errors.mail?.type === "required" && <span className="text-danger">This Field is mandate</span>}
                </div>
                <div className="d-grid p-1">
                    <button className="btn btn-primary" >SAVE</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;
"use client"

import Contact from "@/models/Contact";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({contact,isEditing,save}:{contact?:Contact,isEditing?:boolean,save:(contact:Contact) => void}) => {

    const router = useRouter();

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

        save(contact);

    });

    useEffect(() => {
        if(isEditing){
            reset(contact);
        }
    },[]);
    
    return (
        <section className="col-sm-5 mx-auto" >
            <h3>Contact Form</h3>

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
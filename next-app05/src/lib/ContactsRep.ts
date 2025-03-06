"use server"

import Contact from '@/models/Contact';
import fs from 'fs';

const fileName = './fakedata/contacts.json';

export const getAllContacts = async ():Promise<Contact[]> => {
    let data:string = fs.readFileSync(fileName,'utf8');
    return JSON.parse(data) as Contact[];
};

export const getContactById = async (id:number):Promise<Contact | undefined > => {
    let data:string = fs.readFileSync(fileName,'utf8');
    let contacts = JSON.parse(data) as Contact[];
    return contacts.find(c => c.contactId===id);
};

export const addContact = async (c:Contact):Promise<Contact> => {
    let data:string = fs.readFileSync(fileName,'utf8');
    let contacts = JSON.parse(data) as Contact[];
    contacts.push(c);
    fs.writeFileSync(fileName,JSON.stringify(contacts));
    return c;
}

export const replaceContact = async (c:Contact):Promise<Contact> => {
    let data:string = fs.readFileSync(fileName,'utf8');
    let contacts = JSON.parse(data) as Contact[];
    let index = contacts.findIndex(cx => cx.contactId===c.contactId);
    if(index>-1){
        contacts[index]=c;
        fs.writeFileSync(fileName,JSON.stringify(contacts));
    }
    return c;
}

export const removeContact = async (id:number):Promise<void> => {
    let data:string = fs.readFileSync(fileName,'utf8');
    let contacts = JSON.parse(data) as Contact[];
    let index = contacts.findIndex(cx => cx.contactId===id);
    if(index>-1){
        contacts.splice(index,1);
        fs.writeFileSync(fileName,JSON.stringify(contacts));
    }    
}

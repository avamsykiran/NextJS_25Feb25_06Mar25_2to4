"use client"

import Contact from "@/models/Contact";
import axios, { AxiosResponse } from "axios";

const api= "/api/contacts";

export const getAllContactsFromApi = () : Promise<AxiosResponse<Contact[]>> => axios.get<Contact[]>(api);

export const getContactByIdFromApi = (id:number): Promise<AxiosResponse<Contact>> => axios.get<Contact>(api + "/" + id);

export const addContactIdFromApi = (c:Contact): Promise<AxiosResponse<Contact>> => axios.post<Contact>(api,c);

export const replaceContactIdFromApi = (c:Contact): Promise<AxiosResponse<Contact>> => axios.put<Contact>(api,c);

export const removeContactByIdFromApi = (id:number): Promise<AxiosResponse<void>> => axios.delete<void>(api + "/" + id);

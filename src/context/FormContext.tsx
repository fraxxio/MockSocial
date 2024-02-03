"use client";
import { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};

type FormData = {
  username: string;
  usernamehandle: string;
  date: number;
  text: string;
  profilepic: FileList | null;
  postpic: FileList | null;
  comments: number;
  reposts: number;
  likes: number;
  views: number;
};

type TFormContext = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const FormContext = createContext<TFormContext | null>(null);

export default function FormContextProvider({ children }: FormContextProviderProps) {
  const [formData, setFormData] = useState<FormData>({
    username: "Username",
    usernamehandle: "@user",
    date: 15,
    text: "Hello",
    profilepic: null,
    postpic: null,
    comments: 5,
    reposts: 51,
    likes: 1500,
    views: 24111,
  });

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside FormContextProvider!");
  }
  return context;
}

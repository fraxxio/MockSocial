"use client";
import { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};

type FormData = {
  username: string;
  usernamehandle: string;
  date: string;
  text: string;
  comments: number;
  reposts: number;
  likes: number;
  views: number;
};

type TFormContext = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  profilePath: string;
  setProfilePath: React.Dispatch<React.SetStateAction<string>>;
  postPath: string;
  setPostPath: React.Dispatch<React.SetStateAction<string>>;
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
};

export const FormContext = createContext<TFormContext | null>(null);

export default function FormContextProvider({ children }: FormContextProviderProps) {
  const [formData, setFormData] = useState<FormData>({
    username: "Username",
    usernamehandle: "@user",
    date: "15h",
    text: "Hello",
    comments: 5,
    reposts: 51,
    likes: 1500,
    views: 24111,
  });
  const [profilePath, setProfilePath] = useState<string>("");
  const [postPath, setPostPath] = useState<string>("");
  const [img, setImg] = useState<string>("");

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        profilePath,
        setProfilePath,
        postPath,
        setPostPath,
        setImg,
        img,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside FormContextProvider!");
  }
  return context;
}

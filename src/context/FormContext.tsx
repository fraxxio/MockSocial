"use client";
import { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};

type TwitterPostForm = {
  username: string;
  usernamehandle: string;
  date: string;
  text: string;
  comments: number;
  reposts: number;
  likes: number;
  views: number;
  badge: string;
  theme: string;
};

type TwitterDMForm = {
  username: string;
  date: string;
  text: string;
  reaction: string;
  sendertext: string;
  senderdate: string;
  senderreaction: string;
  badge: string;
  theme: string;
  reverseorder: boolean;
};

type DiscordForm = {
  username: string;
  date: string;
  text: string;
  reaction: string;
  senderusername: string;
  sendertext: string;
  senderdate: string;
  senderreaction: string;
  theme: string;
  reverseorder: boolean;
};

type TFormContext = {
  twitterPostForm: TwitterPostForm;
  setTwitterPostForm: React.Dispatch<React.SetStateAction<TwitterPostForm>>;
  twitterDMForm: TwitterDMForm;
  setTwitterDMForm: React.Dispatch<React.SetStateAction<TwitterDMForm>>;
  profilePath: string;
  setProfilePath: React.Dispatch<React.SetStateAction<string>>;
  postPath: string;
  setPostPath: React.Dispatch<React.SetStateAction<string>>;
  generatedImg: GeneratedImg;
  setGeneratedImg: React.Dispatch<React.SetStateAction<GeneratedImg>>;
  msgImg: string;
  setMsgImg: React.Dispatch<React.SetStateAction<string>>;
  setDiscordForm: React.Dispatch<React.SetStateAction<DiscordForm>>;
  discordForm: DiscordForm;
};

type GeneratedImg = {
  twitterPost: string;
  twitterDM: string;
  discord: string;
};

export const FormContext = createContext<TFormContext | null>(null);

export default function FormContextProvider({ children }: FormContextProviderProps) {
  const [twitterPostForm, setTwitterPostForm] = useState<TwitterPostForm>({
    username: "Mocksocial",
    usernamehandle: "mocksocial",
    date: "15h",
    text: "If you like this app give us a star on Github!",
    comments: 5,
    reposts: 51,
    likes: 1500,
    views: 24111,
    badge: "none",
    theme: "black",
  });
  const [twitterDMForm, setTwitterDMForm] = useState<TwitterDMForm>({
    username: "Mocksocial",
    date: "15h",
    text: "hello",
    reaction: "",
    sendertext: "hi",
    senderdate: "2m",
    senderreaction: "",
    badge: "none",
    theme: "black",
    reverseorder: false,
  });
  const [discordForm, setDiscordForm] = useState<DiscordForm>({
    username: "Mocksocial",
    date: "15h",
    text: "hello",
    reaction: "",
    senderusername: "",
    sendertext: "hi",
    senderdate: "2m",
    senderreaction: "",
    theme: "black",
    reverseorder: false,
  });
  const [profilePath, setProfilePath] = useState<string>("");
  const [postPath, setPostPath] = useState<string>("");
  const [msgImg, setMsgImg] = useState<string>("");
  const [generatedImg, setGeneratedImg] = useState<GeneratedImg>({
    twitterPost: "",
    twitterDM: "",
    discord: "",
  });

  return (
    <FormContext.Provider
      value={{
        twitterDMForm,
        setTwitterDMForm,
        twitterPostForm,
        setTwitterPostForm,
        profilePath,
        setProfilePath,
        postPath,
        setPostPath,
        setGeneratedImg,
        generatedImg,
        msgImg,
        setMsgImg,
        discordForm,
        setDiscordForm,
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

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

type FbPostForm = {
  username: string;
  date: string;
  text: string;
  theme: string;
  badge: string;
  comments: number;
  reposts: number;
  likes: number;
};

type FbCommentForm = {
  username: string;
  date: string;
  text: string;
  theme: string;
  badge: string;
  likes: number;
};

type FbMessageForm = {
  username: string;
  text: string;
  reaction: string;
  senderreaction: string;
  sendertext: string;
  reverseorder: boolean;
  theme: string;
};
type YtVideoForm = {
  username: string;
  date: string;
  text: string;
  badge: string;
  views: number;
  length: string;
  theme: string;
};

type YtCommunityForm = {
  username: string;
  text: string;
  date: string;
  comments: number;
  likes: number;
  theme: string;
};

type IgPostForm = {
  username: string;
  date: string;
  badge: string;
  text: string;
  comments: number;
  likes: number;
  theme: string;
};

type IgMessageForm = {
  username: string;
  text: string;
  reaction: string;
  sendertext: string;
  senderreaction: string;
  badge: string;
  theme: string;
  reverseorder: boolean;
};

type ChatGptForm = {
  text: string;
  sendertext: string;
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
  setMsgProfilePath: React.Dispatch<React.SetStateAction<string>>;
  msgProfilePath: string;
  setPostPath: React.Dispatch<React.SetStateAction<string>>;
  generatedImg: GeneratedImg;
  setGeneratedImg: React.Dispatch<React.SetStateAction<GeneratedImg>>;
  msgImg: string;
  setMsgImg: React.Dispatch<React.SetStateAction<string>>;
  setDiscordForm: React.Dispatch<React.SetStateAction<DiscordForm>>;
  discordForm: DiscordForm;
  setFbPostForm: React.Dispatch<React.SetStateAction<FbPostForm>>;
  fbPostForm: FbPostForm;
  setFbCommentForm: React.Dispatch<React.SetStateAction<FbCommentForm>>;
  fbCommentForm: FbCommentForm;
  setFbMessageForm: React.Dispatch<React.SetStateAction<FbMessageForm>>;
  fbMessageForm: FbMessageForm;
  setYtVideoForm: React.Dispatch<React.SetStateAction<YtVideoForm>>;
  ytVideoForm: YtVideoForm;
  setYtCommunityForm: React.Dispatch<React.SetStateAction<YtCommunityForm>>;
  ytCommunityForm: YtCommunityForm;
  setIgPostForm: React.Dispatch<React.SetStateAction<IgPostForm>>;
  igPostForm: IgPostForm;
  setIgMessageForm: React.Dispatch<React.SetStateAction<IgMessageForm>>;
  igMessageForm: IgMessageForm;
  setChatGptForm: React.Dispatch<React.SetStateAction<ChatGptForm>>;
  chatGptForm: ChatGptForm;
};

type GeneratedImg = {
  twitterPost: string;
  twitterDM: string;
  discord: string;
  fbPost: string;
  fbComment: string;
  fbMessage: string;
  ytVideo: string;
  ytCommunity: string;
  igPost: string;
  igMessage: string;
  chatGpt: string;
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
    text: "If you like this app give us a star on Github!",
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
    text: "If you like this app give us a star on Github!",
    reaction: "",
    senderusername: "",
    sendertext: "hi",
    senderdate: "2m",
    senderreaction: "",
    theme: "dark",
    reverseorder: false,
  });
  const [fbPostForm, setFbPostForm] = useState<FbPostForm>({
    username: "Mocksocial",
    date: "15h",
    text: "If you like this app give us a star on Github!",
    theme: "light",
    badge: "none",
    comments: 5,
    reposts: 51,
    likes: 1500,
  });
  const [fbCommentForm, setFbCommentForm] = useState<FbCommentForm>({
    username: "Mocksocial",
    date: "2m",
    text: "If you like this app give us a star on Github!",
    theme: "dark",
    badge: "none",
    likes: 15,
  });
  const [fbMessageForm, setFbMessageForm] = useState<FbMessageForm>({
    username: "Mocksocial",
    text: "If you like this app give us a star on Github!",
    reaction: "",
    senderreaction: "",
    sendertext: "",
    reverseorder: false,
    theme: "dark",
  });
  const [ytVideoForm, setYtVideoForm] = useState<YtVideoForm>({
    username: "Mocksocial",
    text: "If you like this app give us a star on Github!",
    date: "2 days ago",
    views: 16000,
    length: "12:51",
    badge: "none",
    theme: "dark",
  });
  const [ytCommunityForm, setYtCommunityForm] = useState<YtCommunityForm>({
    username: "Mocksocial",
    text: "If you like this app give us a star on Github!",
    date: "1 day ago",
    comments: 231,
    likes: 2000,
    theme: "dark",
  });
  const [igPostForm, setIgPostForm] = useState<IgPostForm>({
    username: "Mocksocial",
    text: "If you like this app give us a star on Github!",
    date: "12h",
    comments: 52,
    badge: "none",
    likes: 4055,
    theme: "light",
  });
  const [igMessageForm, setIgMessageForm] = useState<IgMessageForm>({
    username: "Mocksocial",
    text: "If you like this app give us a star on Github!",
    reaction: "",
    sendertext: "",
    senderreaction: "",
    reverseorder: false,
    badge: "none",
    theme: "dark",
  });
  const [chatGptForm, setChatGptForm] = useState<ChatGptForm>({
    text: "Hello, how can I help you?",
    sendertext: "Hello",
    reverseorder: false,
    theme: "dark",
  });
  const [profilePath, setProfilePath] = useState<string>("");
  const [msgProfilePath, setMsgProfilePath] = useState<string>("");
  const [postPath, setPostPath] = useState<string>("");
  const [msgImg, setMsgImg] = useState<string>("");
  const [generatedImg, setGeneratedImg] = useState<GeneratedImg>({
    twitterPost: "",
    twitterDM: "",
    discord: "",
    fbPost: "",
    fbComment: "",
    fbMessage: "",
    ytVideo: "",
    ytCommunity: "",
    igPost: "",
    igMessage: "",
    chatGpt: "",
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
        msgProfilePath,
        setMsgProfilePath,
        fbPostForm,
        setFbPostForm,
        fbCommentForm,
        setFbCommentForm,
        fbMessageForm,
        setFbMessageForm,
        ytVideoForm,
        setYtVideoForm,
        ytCommunityForm,
        setYtCommunityForm,
        igPostForm,
        setIgPostForm,
        igMessageForm,
        setIgMessageForm,
        chatGptForm,
        setChatGptForm,
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

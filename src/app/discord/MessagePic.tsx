"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TagStyles = (text: string) => {
  const regex = /(@\w+)/g;
  const words = text.split(/(@\w+)/g);
  return words.map((word, index) => {
    if (regex.test(word)) {
      return (
        <span key={index} className='text-[#c1c5f3] bg-[#3d4270] rounded-sm font-medium px-1'>
          {word}
        </span>
      );
    } else {
      return <span key={index}>{word}</span>;
    }
  });
};

const MessagePic = () => {
  const { discordForm, msgImg, postPath, profilePath, msgProfilePath, generatedImg } =
    useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold pb-3'>Preview:</h1>
        <div
          id='DiscordMessage'
          className={`w-full min-h-80 flex flex-col ${
            discordForm.theme === "dark" ? "bg-[#313338]" : "bg-white"
          }`}
        >
          <div
            className={`flex justify-between items-center p-2.5 ${
              discordForm.theme === "light"
                ? "border-[#cfcfcf] border-b"
                : "border-[#2e2f34] border-b-2"
            }`}
          >
            <div className='flex justify-between items-center gap-3'>
              <Avatar className='h-6 w-6'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <p className={`font-medium ${discordForm.theme === "light" ? "text-black" : null}`}>
                {discordForm.username}
              </p>
            </div>
            <div className='flex gap-3 items-center'>
              <Image src='/discord/Vector.svg' height={19} width={19} alt='' />
              <Image src='/discord/Video.svg' height={23} width={23} alt='' />
              <Image src='/discord/Pinned.svg' height={22} width={22} alt='' />
            </div>
          </div>
          <div
            className={`flex flex-1 h-max px-2 py-4 gap-4 ${
              discordForm.reverseorder ? "flex-col-reverse justify-start" : "flex-col justify-end"
            }`}
          >
            <div className='flex gap-4'>
              <Avatar>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <div className='flex gap-2 items-center'>
                  <p
                    className={`font-medium text-sm ${
                      discordForm.theme === "light" ? "text-black" : null
                    }`}
                  >
                    {discordForm.username}
                  </p>
                  <p className='text-[#7d838b] text-xs'>{discordForm.date}</p>
                </div>
                <p
                  className={`${
                    discordForm.theme === "light" ? "text-black" : null
                  } break-words max-w-[39rem]`}
                >
                  {TagStyles(discordForm.text)}
                </p>
                {postPath && (
                  <Image
                    src={postPath}
                    alt='Message picture'
                    width={100}
                    height={100}
                    style={{
                      width: "65%",
                      maxHeight: "40rem",
                    }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-xl mt-1'
                  />
                )}
                {discordForm.reaction && (
                  <div
                    className={`px-1 border rounded-lg w-fit mt-1 font-medium tracking-widest ${
                      discordForm.theme === "light"
                        ? "bg-[#e7e9fd] text-[#4752c4] border-[#a5acf8]"
                        : "bg-[#373a54] border-[#5865f2] "
                    }`}
                  >
                    {discordForm.reaction} 1
                  </div>
                )}
              </div>
            </div>
            {discordForm.sendertext && (
              <div className='flex gap-4'>
                <Avatar>
                  <AvatarImage src={msgProfilePath || "/Logo.png"} />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <div className='flex gap-2 items-center'>
                    <p
                      className={`font-medium text-sm ${
                        discordForm.theme === "light" ? "text-black" : null
                      }`}
                    >
                      {discordForm.senderusername}
                    </p>
                    <p className='text-[#7d838b] text-xs'>{discordForm.senderdate}</p>
                  </div>
                  <p
                    className={`${
                      discordForm.theme === "light" ? "text-black" : null
                    } break-words max-w-[39rem]`}
                  >
                    {TagStyles(discordForm.sendertext)}
                  </p>
                  {msgImg && (
                    <Image
                      src={msgImg}
                      alt='Message picture'
                      width={100}
                      height={100}
                      style={{
                        width: "65%",
                        maxHeight: "40rem",
                      }}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='rounded-xl mt-1'
                    />
                  )}
                  {discordForm.senderreaction && (
                    <div
                      className={`px-1 border rounded-lg w-fit mt-1 font-medium tracking-widest ${
                        discordForm.theme === "light"
                          ? "bg-[#e7e9fd] text-[#4752c4] border-[#a5acf8]"
                          : "bg-[#373a54] border-[#5865f2] "
                      }`}
                    >
                      {discordForm.senderreaction} 1
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={`w-[98%] rounded-lg py-2 px-4 flex justify-between mx-auto mb-3 ${
              discordForm.theme === "light" ? "text-[#979aa3]" : "bg-[#383a40] text-gray-500"
            }`}
          >
            <div className='flex items-center gap-3'>
              <Image src='/discord/Add.svg' height={23} width={23} alt='' />
              <p>Message @{discordForm.username}</p>
            </div>
            <div className='flex items-center gap-4'>
              <Image src='/discord/Gif.svg' height={23} width={23} alt='' />
              <Image src='/discord/Stickers.svg' height={23} width={23} alt='' />
              <Image src='/discord/Emoji.svg' height={23} width={23} alt='' />
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.discord} />
    </div>
  );
};

export default MessagePic;

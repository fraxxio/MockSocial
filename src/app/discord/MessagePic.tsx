"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const MessagePic = () => {
  const { discordForm, msgImg, postPath, profilePath, msgProfilePath, generatedImg } =
    useFormContext();
  //TODO msg image, themes, text wrapping bugs
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold pb-3'>Preview:</h1>
        <div id='DiscordMessage' className='bg-[#313338] w-full min-h-80 flex flex-col'>
          <div className='flex justify-between items-center border-b-2 border-[#2e2f34] p-2.5'>
            <div className='flex justify-between items-center gap-3'>
              <Avatar className='h-6 w-6'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <p className='font-medium'>{discordForm.username}</p>
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
                  <p className='font-medium text-sm'>{discordForm.username}</p>
                  <p className='text-[#7d838b] text-xs'>{discordForm.date}</p>
                </div>
                <p>{discordForm.text}</p>
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
                  <div className='px-1 border border-[#5865f2] rounded-lg w-fit bg-[#373a54] mt-1 font-medium tracking-widest'>
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
                    <p className='font-medium text-sm'>{discordForm.senderusername}</p>
                    <p className='text-[#7d838b] text-xs'>{discordForm.senderdate}</p>
                  </div>
                  <p>{discordForm.sendertext}</p>
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
                    <div className='px-1 border border-[#5865f2] rounded-lg w-fit bg-[#373a54] mt-1 font-medium tracking-widest'>
                      {discordForm.senderreaction} 1
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className='bg-[#383a40] w-[98%] rounded-lg py-2 px-4 text-gray-500 flex justify-between mx-auto mb-3'>
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
      {generatedImg.discord && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={generatedImg.discord}
            width={500}
            height={500}
            alt='Generated Image'
            style={{
              width: "100%",
            }}
          />
          <Button
            className='mt-3 gap-1'
            onClick={() => {
              const link = document.createElement("a");
              link.href = generatedImg.discord;
              link.download = "MockSocial_Discord.png";
              link.click();
            }}
          >
            <DownloadIcon size={16} /> Download
          </Button>
        </div>
      )}
    </div>
  );
};

export default MessagePic;

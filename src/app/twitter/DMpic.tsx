"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { ArrowLeft, DownloadIcon, Info } from "lucide-react";
import Image from "next/image";
import React from "react";

const DMpic = () => {
  const { twitterDMForm, msgImg, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold pb-3'>Preview:</h1>
        <div className='w-[75%]' id='TwitterDM'>
          <div
            className={`w-full h-20 border-b border-gray-500 border-opacity-20 flex justify-between items-center px-3 ${
              twitterDMForm.theme === "black"
                ? "bg-black"
                : twitterDMForm.theme === "white"
                ? "bg-white"
                : "bg-[#15202b]"
            }`}
          >
            <ArrowLeft color={`${twitterDMForm.theme === "white" ? "#1d9bf0" : "white"}`} />
            <div>
              <Avatar className='mx-auto'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className='flex gap-1 items-center  pt-1'>
                <p
                  className={`text-sm font-semibold ${
                    twitterDMForm.theme === "white" ? "text-black" : null
                  }`}
                >
                  {twitterDMForm.username}
                </p>
                {twitterDMForm.badge === "verified" ? (
                  <Image src='/twitterBlueBadge.svg' width={15.5} height={15.5} alt='' />
                ) : twitterDMForm.badge === "company" ? (
                  <Image src='/twitterGoldBadge.svg' width={17} height={17} alt='' />
                ) : twitterDMForm.badge === "government" ? (
                  <Image src='/twitterGrayBadge.svg' width={17} height={17} alt='' />
                ) : null}
              </div>
            </div>
            <Info color={`${twitterDMForm.theme === "white" ? "#1d9bf0" : "white"}`} />
          </div>
          <div
            className={`w-full min-h-56 flex gap-4 p-3 ${
              twitterDMForm.reverseorder ? "flex-col justify-start" : "flex-col-reverse justify-end"
            } ${
              twitterDMForm.theme === "black"
                ? "bg-black"
                : twitterDMForm.theme === "white"
                ? "bg-white"
                : "bg-[#15202b]"
            }`}
          >
            <div
              className={`h-fit flex flex-col ${
                twitterDMForm.sendertext || msgImg ? null : "hidden"
              }`}
            >
              {msgImg && (
                <Image
                  src={msgImg}
                  alt='Message picture'
                  width={100}
                  height={100}
                  style={{
                    width: "75%",
                  }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='rounded-3xl mb-1.5 ml-auto'
                />
              )}
              <div
                className={`py-2 px-3.5 bg-[#1d9bf0] rounded-3xl rounded-br-sm w-fit max-w-80 ml-auto break-words ${
                  !twitterDMForm.sendertext && "hidden"
                }`}
              >
                {twitterDMForm.sendertext}
              </div>
              {twitterDMForm.senderreaction && (
                <div className='rounded-xl border border-gray-500 border-opacity-30 w-fit px-1 mt-1.5 ml-auto'>
                  {twitterDMForm.senderreaction}
                </div>
              )}
              <p className='text-sm text-gray-500 ml-auto pt-1'>{twitterDMForm.senderdate}</p>
            </div>
            <div
              className={`h-fit flex flex-col mr-auto ${
                twitterDMForm.text || postPath ? null : "hidden"
              }`}
            >
              {postPath && (
                <Image
                  src={postPath}
                  alt='Message picture'
                  width={100}
                  height={100}
                  style={{
                    width: "75%",
                  }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='rounded-3xl mb-1.5'
                />
              )}
              <div
                className={`py-2 px-3.5 rounded-3xl rounded-bl-sm w-fit max-w-80 break-words ${
                  !twitterDMForm.text && "hidden"
                } ${
                  twitterDMForm.theme === "black"
                    ? "bg-[#2f3336]"
                    : twitterDMForm.theme === "white"
                    ? "bg-white text-black"
                    : "bg-[#3d5466]"
                }`}
              >
                {twitterDMForm.text}
              </div>
              {twitterDMForm.reaction && (
                <div className='rounded-xl border border-gray-500 border-opacity-30 w-fit px-1 mt-1.5'>
                  {twitterDMForm.reaction}
                </div>
              )}
              <p className='text-sm text-gray-500 pt-1'>{twitterDMForm.date}</p>
            </div>
          </div>
          <div
            className={`w-full h-14 flex justify-center items-center border-t border-gray-500 border-opacity-20 ${
              twitterDMForm.theme === "black"
                ? "bg-black"
                : twitterDMForm.theme === "white"
                ? "bg-white"
                : "bg-[#15202b]"
            }`}
          >
            <div
              className={`w-[98%] h-[80%] rounded-2xl flex items-center gap-6 px-4 ${
                twitterDMForm.theme === "black"
                  ? "bg-[#202327]"
                  : twitterDMForm.theme === "white"
                  ? "null"
                  : "bg-[#273340]"
              }`}
            >
              <div className='flex items-center justify-between gap-3'>
                <svg viewBox='0 0 24 24' className='size-5 fill-[#1d9bf0]'>
                  <g>
                    <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'></path>
                  </g>
                </svg>
                <svg viewBox='0 0 24 24' className='size-5 fill-[#1d9bf0]'>
                  <g>
                    <path d='M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z'></path>
                  </g>
                </svg>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='text-gray-500'>Start a new message</p>
                <svg viewBox='0 0 24 24' className='size-5 fill-[#1d9bf0]'>
                  <g>
                    <path d='M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z'></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {generatedImg.twitterDM && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={generatedImg.twitterDM}
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
              link.href = generatedImg.twitterDM;
              link.download = "MockSocial_Twitter_DM.png";
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

export default DMpic;

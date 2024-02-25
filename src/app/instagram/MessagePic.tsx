"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import Image from "next/image";
import React from "react";

const MessagePic = () => {
  const { igMessageForm, postPath, profilePath, msgImg, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          id='InstagramDM'
          className={`w-[90%] ${igMessageForm.theme === "dark" ? "bg-black" : "bg-white"}`}
        >
          <div
            className={`flex items-center justify-between border-b border-opacity-50 px-4 py-3 ${
              igMessageForm.theme === "light" ? "border-gray-400" : ""
            }`}
          >
            <div className='flex gap-3'>
              <Avatar>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className='flex gap-1 items-center'>
                <p
                  className={`font-semibold ${
                    igMessageForm.theme === "light" ? "text-black" : null
                  }`}
                >
                  {igMessageForm.username}
                </p>
                {igMessageForm.badge === "verified" ? (
                  <svg viewBox='0 0 12 13' width='13' height='13' fill='#0095f6'>
                    <g transform='translate(-98 -917)'>
                      <path d='m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819'></path>
                    </g>
                  </svg>
                ) : null}
              </div>
            </div>
            <div className='flex gap-4'>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Audio call</title>
                <path d='M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z'></path>
              </svg>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Video call</title>
                <rect
                  fill='none'
                  height='18'
                  rx='3'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  width='16.999'
                  x='1'
                  y='3'
                ></rect>
                <path
                  d='m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854'
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
              </svg>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                role='img'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Conversation information</title>
                <circle
                  cx='12.001'
                  cy='12.005'
                  fill='none'
                  r='10.5'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></circle>
                <circle cx='11.819' cy='7.709' r='1.25'></circle>
                <line
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  x1='10.569'
                  x2='13.432'
                  y1='16.777'
                  y2='16.777'
                ></line>
                <polyline
                  fill='none'
                  points='10.569 11.05 12 11.05 12 16.777'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></polyline>
              </svg>
            </div>
          </div>
          <div
            className={`flex px-4 min-h-[20rem] ${
              igMessageForm.reverseorder ? "flex-col-reverse justify-end" : "flex-col"
            } py-4 gap-4`}
          >
            <div className='flex gap-2 items-end'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className='relative'>
                {postPath && (
                  <Image
                    src={postPath}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      maxHeight: "20rem",
                      maxWidth: "20rem",
                      objectFit: "cover",
                    }}
                    alt='Post picture'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-3xl'
                  />
                )}
                <p
                  className={`break-words max-w-[20rem] py-2 px-3 rounded-3xl text-sm ${
                    igMessageForm.theme === "light" ? "text-black" : "bg-[#262626]"
                  }`}
                >
                  {igMessageForm.text}
                </p>
                {igMessageForm.reaction && (
                  <div
                    className={`absolute left-1 bottom-[-12px] border-black px-1.5 rounded-3xl text-xs ${
                      igMessageForm.theme === "light"
                        ? "bg-white border-0"
                        : "bg-[#262626] border-2"
                    }`}
                  >
                    {igMessageForm.reaction}
                  </div>
                )}
              </div>
            </div>
            {igMessageForm.sendertext && (
              <div className='gap-2 items-end relative ml-auto'>
                {msgImg && (
                  <Image
                    src={msgImg}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      maxHeight: "20rem",
                      maxWidth: "20rem",
                      objectFit: "cover",
                    }}
                    alt='Post picture'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-3xl'
                  />
                )}
                <p
                  className={`break-words max-w-[20rem] py-2 px-3 bg-[#3797f0] rounded-3xl text-sm`}
                >
                  {igMessageForm.sendertext}
                </p>
                {igMessageForm.senderreaction && (
                  <div
                    className={`absolute right-1 bottom-[-12px] border-2 border-black px-1.5 rounded-3xl text-xs ${
                      igMessageForm.theme === "light"
                        ? "bg-white border-0"
                        : "bg-[#262626] border-2"
                    }`}
                  >
                    {igMessageForm.senderreaction}
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            className={`mx-4 mb-3 border border-opacity-50 rounded-3xl py-2.5 px-4 mt-2 flex items-center justify-between ${
              igMessageForm.theme === "light" ? "border-gray-400 " : "border-gray-500 "
            }`}
          >
            <div className='flex items-center gap-2'>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Choose an emoji</title>
                <path d='M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z'></path>
              </svg>
              <p className={`text-sm text-[#737373] font-medium`}>Message...</p>
            </div>
            <div className='flex items-center gap-3'>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Voice Clip</title>
                <path
                  d='M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897'
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
                <line
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinejoin='round'
                  strokeWidth={2}
                  x1='12'
                  x2='12'
                  y1='19.068'
                  y2='22'
                ></line>
                <line
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  x1='8.706'
                  x2='15.104'
                  y1='22'
                  y2='22'
                ></line>
                <path
                  d='M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z'
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
              </svg>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Add Photo or Video</title>
                <path d='M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z'></path>
                <path
                  d='m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905'
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
                <path
                  d='M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z'
                  fill='none'
                  stroke={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
              </svg>
              <svg
                fill={`${igMessageForm.theme === "light" ? "black" : "#f5f5f5"}`}
                height='24'
                viewBox='0 0 24 24'
                width='24'
              >
                <title>Like</title>
                <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.igMessage} />
    </div>
  );
};

export default MessagePic;

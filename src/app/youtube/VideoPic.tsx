"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import { formatData } from "@/lib/formatData";
import Image from "next/image";
import React from "react";

const VideoPic = () => {
  const { ytVideoForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          className={`w-fit min-w-[40rem] p-4 ${
            ytVideoForm.theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"
          }`}
        >
          <Image
            className='rounded-lg mb-2 bg-[#272727]'
            width={100}
            height={100}
            style={{
              width: "100%",
              maxHeight: "20rem",
              maxWidth: "40rem",
              objectFit: "contain",
            }}
            src={postPath || "/twitter/TwitterThumbnail.png"}
            alt='Thumbnail'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='flex gap-3 pb-4'>
            <Avatar>
              <AvatarImage src={profilePath || "/Logo.png"} />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <p
                className={`font-medium break-words line-clamp-2 max-w-[34rem] max-h-[5rem] ${
                  ytVideoForm.theme === "dark" ? null : "text-[#191919]"
                }`}
              >
                {ytVideoForm.text}
              </p>
              <div
                className={`flex items-center gap-1 text-sm ${
                  ytVideoForm.theme === "dark" ? "text-[#aaaaaa]" : "text-[#606060]"
                }`}
              >
                <p>{ytVideoForm.username}</p>
                {ytVideoForm.badge === "verified" ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='15'
                    width='15'
                    viewBox='0 0 24 24'
                    focusable='false'
                    fill={`${ytVideoForm.theme === "dark" ? "#aaaaaa" : "#606060"}`}
                  >
                    <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z'></path>
                  </svg>
                ) : null}
              </div>
              <div
                className={`flex text-sm gap-1 items-center ${
                  ytVideoForm.theme === "dark" ? "text-[#aaaaaa]" : "text-[#606060]"
                }`}
              >
                <p>{formatData(ytVideoForm.views)} views</p>
                <p className='text-[1rem]'>·</p>
                <p>{ytVideoForm.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.ytVideo} />
    </div>
  );
};

export default VideoPic;

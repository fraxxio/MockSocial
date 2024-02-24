"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import { formatData } from "@/lib/formatData";
import { MessageSquareText, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const CommunityPic = () => {
  const { ytCommunityForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className="className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center">
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          id='CommunityPost'
          className={`w-[90%] p-4 ${
            ytCommunityForm.theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"
          }`}
        >
          <div className='flex gap-3'>
            <Avatar>
              <AvatarImage src={profilePath || "/Logo.png"} />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <div className='flex gap-2 items-end'>
                <p
                  className={`font-medium ${
                    ytCommunityForm.theme === "dark" ? null : "text-[#0f0f0f]"
                  }`}
                >
                  {ytCommunityForm.username}
                </p>
                <p
                  className={`text-sm text-[#999999] ${
                    ytCommunityForm.theme === "dark" ? null : "text-[#636262]"
                  }`}
                >
                  {ytCommunityForm.date}
                </p>
              </div>
              <p
                className={`font-[400] break-words max-w-[34rem] ${
                  ytCommunityForm.theme === "dark" ? null : "text-[#0f0f0f]"
                }`}
              >
                {ytCommunityForm.text}
              </p>
              {postPath && (
                <Image
                  className='rounded-lg mt-2 bg-[#272727]'
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    maxHeight: "20rem",
                    maxWidth: "34rem",
                    objectFit: "contain",
                  }}
                  src={postPath}
                  alt='Thumbnail'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              )}
            </div>
          </div>
          <div className='flex gap-6 pl-12 items-center pt-4'>
            <div className='flex gap-1 items-center'>
              <ThumbsUp
                color={`${ytCommunityForm.theme === "dark" ? "#d5d5d5" : "#3d3d3d"}`}
                strokeWidth={1}
                size={20}
              />
              <p
                className={`text-sm ${
                  ytCommunityForm.theme === "dark" ? "text-[#d5d5d5]" : "text-[#4b4b4b]"
                }`}
              >
                {formatData(ytCommunityForm.likes)}
              </p>
            </div>
            <ThumbsDown
              color={`${ytCommunityForm.theme === "dark" ? "#d5d5d5" : "#3d3d3d"}`}
              strokeWidth={1}
              size={20}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='none'
              stroke={`${ytCommunityForm.theme === "dark" ? "#d5d5d5" : "#3d3d3d"}`}
              strokeWidth={20}
              strokeLinejoin='round'
              viewBox='0 0 512 512'
            >
              <path d='M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z' />
            </svg>
            <div className='flex gap-1 items-center'>
              <MessageSquareText
                color={`${ytCommunityForm.theme === "dark" ? "#d5d5d5" : "#3d3d3d"}`}
                strokeWidth={1}
                size={20}
              />
              <p
                className={`text-sm ${
                  ytCommunityForm.theme === "dark" ? "text-[#d5d5d5]" : "text-[#4b4b4b]"
                }`}
              >
                {ytCommunityForm.comments}
              </p>
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.ytCommunity} />
    </div>
  );
};

export default CommunityPic;

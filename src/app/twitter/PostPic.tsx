"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

function formatData(count: number) {
  if (count > 999 && count < 9999) {
    return (count / 1000).toFixed(1) + "K";
  }
  if (count > 9999 && count < 999999) {
    return (count / 1000).toFixed(0) + "K";
  }
  if (count > 999999) {
    return (count / 1000000).toFixed(1) + "M";
  }
  return count;
}

const PostPic = () => {
  const { formData, postPath, profilePath, img } = useFormContext();

  return (
    <div className='flex flex-col gap-6'>
      <div
        id='TwitterPost'
        className={`flex gap-4 h-fit p-4 w-full ${
          formData.theme === "white"
            ? "bg-white"
            : formData.theme === "black"
            ? "bg-black"
            : "bg-[#15202b]"
        }`}
      >
        <Avatar className='w-11 h-11'>
          <AvatarImage src={profilePath || "/Logo.png"} />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>

        <div className='w-full relative'>
          <div className='flex justify-between'>
            <div className='flex gap-1 items-start'>
              <div className='flex gap-1'>
                <h1
                  className={`font-semibold leading-none text-lg ${
                    formData.theme === "black" || formData.theme === "dim"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {formData.username}
                </h1>
                {formData.badge === "verified" ? (
                  <Image src='/twitterBlueBadge.svg' width={17} height={17} alt='' />
                ) : formData.badge === "company" ? (
                  <Image src='/twitterGoldBadge.svg' width={18} height={18} alt='' />
                ) : formData.badge === "government" ? (
                  <Image src='/twitterGrayBadge.svg' width={18} height={18} alt='' />
                ) : null}
              </div>
              <div className='flex gap-1'>
                <p className='text-gray-500 leading-none'>@{formData.usernamehandle}</p>
                <p className='text-gray-500 leading-none'>·</p>
                <p className='text-gray-500 leading-none'>{formData.date}</p>
              </div>
            </div>
            <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
              </g>
            </svg>
          </div>
          <p
            className={`break-words max-w-full pb-3 text-lg ${
              formData.theme === "black" || formData.theme === "dim" ? "text-white" : "text-black"
            }`}
          >
            {formData.text}
          </p>
          {postPath && (
            <Image
              className='border-gray-500 border-opacity-30 border rounded-lg mt-3 mb-2 object-cover'
              width={100}
              height={100}
              style={{
                width: "100%",
              }}
              src={postPath}
              alt='Tweet Picture'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          )}
          <div className='flex justify-between'>
            <div className='flex gap-1 items-center'>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <path d='M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z'></path>
              </svg>
              <p className='text-gray-500'>{formatData(formData.comments)}</p>
            </div>
            <div className='flex gap-1 items-center'>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <g>
                  <path d='M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z'></path>
                </g>
              </svg>
              <p className='text-gray-500'>{formatData(formData.reposts)}</p>
            </div>
            <div className='flex gap-1 items-center'>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <g>
                  <path d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
                </g>
              </svg>
              <p className='text-gray-500'>{formatData(formData.likes)}</p>
            </div>
            <div className='flex gap-1 items-center'>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <g>
                  <path d='M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z'></path>
                </g>
              </svg>
              <p className='text-gray-500'>{formatData(formData.views)}</p>
            </div>
            <div className='flex gap-3'>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <g>
                  <path d='M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z'></path>
                </g>
              </svg>
              <svg viewBox='0 0 24 24' className='fill-gray-500 size-5'>
                <g>
                  <path d='M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z'></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {img && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={img}
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
              link.href = img;
              link.download = "MockSocial_Twitter_post.png";
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

export default PostPic;

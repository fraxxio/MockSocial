"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import { formatData } from "@/lib/formatData";
import Image from "next/image";
import React from "react";

const CommentPic = () => {
  const { fbCommentForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold pb-3'>Preview:</h1>
        <div
          id='FacebookComment'
          className={`w-[90%] h-fit flex p-4 gap-1 ${
            fbCommentForm.theme === "dark" ? "bg-[#242526]" : "bg-[#f0f2f5]"
          }`}
        >
          <Avatar>
            <AvatarImage src={profilePath || "/Logo.png"} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div>
            {fbCommentForm.text !== "" ? (
              <div
                className={`rounded-3xl p-3 w-fit max-w-[30rem] ${
                  fbCommentForm.theme === "light" ? "text-[#050505]" : "bg-[#3a3b3c]"
                }`}
              >
                <div className='flex gap-1 items-center'>
                  <p className='font-semibold'>{fbCommentForm.username}</p>
                  {fbCommentForm.badge === "verified" ? (
                    <svg viewBox='0 0 12 13' width='13' height='13' fill='#0861f3'>
                      <g transform='translate(-98 -917)'>
                        <path d='m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819'></path>
                      </g>
                    </svg>
                  ) : null}
                </div>
                <p className='break-words'>{fbCommentForm.text}</p>
              </div>
            ) : (
              <p
                className={`font-semibold pl-3 pb-2 ${
                  fbCommentForm.theme === "light" ? "text-[#050505]" : null
                }`}
              >
                {fbCommentForm.username}
              </p>
            )}
            {postPath && (
              <Image
                className='rounded-3xl object-cover'
                width={100}
                height={100}
                style={{
                  width: "100%",
                  maxHeight: "30rem",
                  maxWidth: "20rem",
                }}
                src={postPath}
                alt='Tweet Picture'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            )}
            <div className='flex justify-between relative'>
              <div
                className={`flex gap-3 text-[.83rem] leading-6 pl-3 ${
                  fbCommentForm.theme === "light" ? "text-[#65676b]" : "text-[#b0b3b8]"
                }`}
              >
                <p>{fbCommentForm.date}</p>
                <p className='font-semibold'>Like</p>
                <p className='font-semibold'>Reply</p>
              </div>
              {fbCommentForm.likes > 0 ? (
                <div
                  className={`absolute flex text-sm items-center gap-1 rounded-3xl px-[2px] ${
                    fbCommentForm.text.length > 40 || postPath !== ""
                      ? "right-0 top-[-8px]"
                      : "right-[-50px] top-[-40px]"
                  } ${
                    fbCommentForm.theme === "light"
                      ? "shadow-md text-[#67696d]"
                      : "bg-[#3e4042] text-[#a0a4aa]"
                  }`}
                >
                  <Image
                    src='/Facebook/Like.svg'
                    height={0}
                    width={0}
                    style={{ width: "18px", height: "auto" }}
                    alt=''
                  />
                  <p>{formatData(fbCommentForm.likes)}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.fbComment} />
    </div>
  );
};

export default CommentPic;

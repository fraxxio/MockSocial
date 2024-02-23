"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { DownloadIcon, MessageCircle, ThumbsUp, X } from "lucide-react";
import { formatData } from "@/lib/formatData";
import Image from "next/image";
import React from "react";
import GeneratedImg from "@/components/GeneratedImg";

const PostPic = () => {
  const { fbPostForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          id='FacebookPost'
          className={`w-[90%] h-fit ${
            fbPostForm.theme === "dark" ? "bg-[#242526]" : "bg-[#f0f2f5]"
          }`}
        >
          <div className='flex gap-2 px-3.5 pt-3.5'>
            <Avatar className='w-11 h-11'>
              <AvatarImage src={profilePath || "/Logo.png"} />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className='flex justify-between w-full'>
              <div>
                <div className='flex gap-1.5 items-center'>
                  <p
                    className={`font-semibold ${
                      fbPostForm.theme === "light" ? "text-[#050505]" : null
                    }`}
                  >
                    {fbPostForm.username}
                  </p>
                  {fbPostForm.badge === "verified" ? (
                    <svg viewBox='0 0 12 13' width='13' height='13' fill='#0861f3'>
                      <g transform='translate(-98 -917)'>
                        <path d='m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819'></path>
                      </g>
                    </svg>
                  ) : null}
                </div>
                <div className='flex items-center gap-2'>
                  <p
                    className={`text-sm ${
                      fbPostForm.theme === "light" ? "text-[#686b6f]" : "text-[#989b9f]"
                    }`}
                  >
                    {fbPostForm.date} ·{" "}
                  </p>
                  <svg
                    viewBox='0 0 16 16'
                    width='12'
                    height='12'
                    fill={fbPostForm.theme === "dark" ? "#b0b3b8" : "#65676b"}
                  >
                    <g transform='translate(-448 -544)'>
                      <g>
                        <path
                          d='M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434'
                          transform='translate(354 143.5)'
                        ></path>
                        <path
                          d='M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096'
                          transform='translate(354 143.5)'
                        ></path>
                        <path
                          d='M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z'
                          transform='translate(354 143.5)'
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <svg
                  viewBox='0 0 20 20'
                  width='20'
                  height='20'
                  fill={fbPostForm.theme === "dark" ? "#a8abaf" : "#76787b"}
                >
                  <g transform='translate(-446 -350)'>
                    <path d='M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0'></path>
                  </g>
                </svg>
                <X
                  className='w-6 h-6'
                  color={fbPostForm.theme === "dark" ? "#a8abaf" : "#76787b"}
                />
              </div>
            </div>
          </div>
          <p
            className={`px-3.5 pt-1 whitespace-pre-line break-words max-w-[40rem] ${
              fbPostForm.theme === "light" ? "text-[#0c0c0c]" : null
            }`}
          >
            {fbPostForm.text}
          </p>
          {postPath && (
            <Image
              src={postPath}
              width={100}
              height={100}
              style={{
                width: "100%",
                maxHeight: "40rem",
                objectFit: "cover",
              }}
              alt='Post picture'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='py-2'
            />
          )}
          <div className='flex justify-between px-3.5 pt-2 pb-1'>
            <div className='flex gap-1.5 '>
              <Image
                src='/Facebook/Like.svg'
                height={0}
                width={0}
                style={{ width: "18px", height: "auto" }}
                alt=''
              />
              <p
                className={`text-sm text-[#8f9396] font-medium ${
                  fbPostForm.theme === "light" ? "text-[#76787b]" : "text-[#8f9396]"
                }`}
              >
                {formatData(fbPostForm.likes)}
              </p>
            </div>
            <div
              className={`flex gap-2 text-sm ${
                fbPostForm.theme === "light" ? "text-[#76787b]" : "text-[#8f9396]"
              }`}
            >
              {fbPostForm.comments > 0 ? <p>{formatData(fbPostForm.comments)} comments</p> : null}
              {fbPostForm.reposts > 0 ? <p>{formatData(fbPostForm.reposts)} shares</p> : null}
            </div>
          </div>
          <div
            className={`w-[96%] h-[1px] mx-auto my-2 ${
              fbPostForm.theme === "light" ? "bg-[#ced0d4] " : "bg-[#3e4042]"
            }`}
          ></div>
          <div
            className={`flex justify-around px-3.5 pb-2 font-medium text-[.9rem] ${
              fbPostForm.theme === "light" ? "text-[#76787b]" : "text-[#b0b3b8]"
            }`}
          >
            <div className='flex gap-1 items-center'>
              <ThumbsUp
                color={fbPostForm.theme === "light" ? "#76787b" : "#b0b3b8"}
                width={20}
                height={20}
              />
              <p>Like</p>
            </div>
            <div className='flex gap-1 items-center'>
              <MessageCircle
                color={fbPostForm.theme === "light" ? "#76787b" : "#b0b3b8"}
                width={20}
                height={20}
              />
              <p>Comment</p>
            </div>
            <div className='flex gap-1 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                stroke={fbPostForm.theme === "light" ? "#76787b" : "#b0b3b8"}
                strokeWidth={35}
                strokeLinejoin='round'
                viewBox='0 0 512 512'
              >
                <path d='M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z' />
              </svg>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.fbPost} />
      {/* {generatedImg.fbPost && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={generatedImg.fbPost}
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
              link.href = generatedImg.fbPost;
              link.download = "MockSocial_Facebook_post.png";
              link.click();
            }}
          >
            <DownloadIcon size={16} /> Download
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default PostPic;

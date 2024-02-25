"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFormContext } from "@/context/FormContext";
import Image from "next/image";
import React from "react";

const PostPic = () => {
  const TagStyles = (text: string) => {
    const regex = /(@\w+)/g;
    const words = text.split(/(@\w+)/g);
    return words.map((word, index) => {
      if (regex.test(word)) {
        return (
          <span key={index} className='text-[#2b5984]'>
            {word}
          </span>
        );
      } else {
        return <span key={index}>{word}</span>;
      }
    });
  };

  function addCommasToNumber(num: number) {
    let numStr = num.toString();
    let numArr = numStr.split("");
    let commaPosition = numArr.length % 3 === 0 ? 3 : numArr.length % 3;
    for (let i = commaPosition; i < numArr.length; i += 4) {
      numArr.splice(i, 0, ",");
    }
    return numArr.join("");
  }
  const { igPostForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2'>
        <h1 className='text-lg font-semibold text-center pb-3'>Preview:</h1>
        <div
          id='InstagramPost'
          className={`w-full p-4 ${igPostForm.theme === "light" ? "bg-white" : "bg-black"}`}
        >
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={profilePath || "/Logo.png"} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className='flex items-center gap-1'>
                <p
                  className={`font-semibold ${
                    igPostForm.theme === "light" ? "text-[#242424]" : null
                  }`}
                >
                  {igPostForm.username}
                </p>
                {igPostForm.badge === "verified" ? (
                  <svg viewBox='0 0 12 13' width='13' height='13' fill='#0095f6'>
                    <g transform='translate(-98 -917)'>
                      <path d='m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819'></path>
                    </g>
                  </svg>
                ) : null}
                <p className={`text-xs ${igPostForm.theme === "light" ? "text-[#7e7e7e]" : null}`}>
                  •
                </p>
                <p className={`text-sm ${igPostForm.theme === "light" ? "text-[#737373]" : null}`}>
                  {igPostForm.date}
                </p>
              </div>
            </div>
            <svg fill='black' height='24' role='img' viewBox='0 0 24 24' width='24'>
              <circle cx='12' cy='12' r='1.5'></circle>
              <circle cx='6' cy='12' r='1.5'></circle>
              <circle cx='18' cy='12' r='1.5'></circle>
            </svg>
          </div>
          <Image
            className='mt-3 rounded bg-black'
            width={100}
            height={100}
            style={{
              width: "100%",
              maxHeight: "40rem",
              objectFit: "contain",
            }}
            src={postPath || "/discord/DiscordThumbnail.png"}
            alt='Instagram Picture'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='flex items-center justify-between pt-3'>
            <div className='flex items-center gap-4'>
              <svg fill='#202020' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
              </svg>
              <svg fill='#202020' height='24' viewBox='0 0 24 24' width='24'>
                <path
                  d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
                  fill='none'
                  stroke='#202020'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></path>
              </svg>
              <svg fill='#202020' height='24' viewBox='0 0 24 24' width='24'>
                <line
                  fill='none'
                  stroke='#202020'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  x1='22'
                  x2='9.218'
                  y1='3'
                  y2='10.083'
                ></line>
                <polygon
                  fill='none'
                  points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
                  stroke='#202020'
                  strokeLinejoin='round'
                  strokeWidth={2}
                ></polygon>
              </svg>
            </div>
            <svg fill='#202020' height='24' viewBox='0 0 24 24' width='24'>
              <polygon
                fill='none'
                points='20 21 12 13.44 4 21 4 3 20 3 20 21'
                stroke='#202020'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              ></polygon>
            </svg>
          </div>
          <p className={`font-semibold pt-3 text-black text-sm`}>
            {addCommasToNumber(igPostForm.likes)} likes
          </p>
          <div className='flex gap-2'>
            <p className={`font-semibold pt-3 text-black text-sm`}>{igPostForm.username}</p>
            <p className={`pt-3 text-black text-sm truncate`}>{TagStyles(igPostForm.text)}</p>
          </div>
          <p className={`text-sm pt-3 text-[#828282]`}>View all {igPostForm.comments} comments</p>
          <div className='flex items-center justify-between pt-1'>
            <p className={`text-sm text-[#828282]`}>Add a comment...</p>
            <svg fill='#828282' height='13' viewBox='0 0 24 24' width='13'>
              <path d='M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z'></path>
            </svg>
          </div>
        </div>
      </div>
      <GeneratedImg path={generatedImg.igPost} />
    </div>
  );
};

export default PostPic;

"use client";
import GeneratedImg from "@/components/GeneratedImg";
import { useFormContext } from "@/context/FormContext";
import React from "react";

const CommentPic = () => {
  const { setFbCommentForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-gray-500 border-opacity-40 border rounded-sm p-2 flex flex-col items-center'>
        <h1 className='text-lg font-semibold pb-3'>Preview:</h1>
        <div id='FacebookComment' className='w-full h-10 bg-black'>
          asdasd
        </div>
      </div>
      <GeneratedImg path={generatedImg.fbComment} />
    </div>
  );
};

export default CommentPic;

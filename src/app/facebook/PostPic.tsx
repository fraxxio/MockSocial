"use client";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const PostPic = () => {
  const { twitterPostForm, postPath, profilePath, generatedImg } = useFormContext();
  return (
    <div className='flex flex-col gap-6'>
      <div></div>
      {generatedImg.twitterPost && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={generatedImg.twitterPost}
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
              link.href = generatedImg.twitterPost;
              link.download = "MockSocial_Facebook_post.png";
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

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const GeneratedImg = ({ path = "" }) => {
  return (
    <>
      {path && (
        <div className='border-gray-500 border-opacity-40 border rounded-sm p-4 text-center'>
          <p className='font-semibold pb-3'>Generated image:</p>
          <Image
            src={path}
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
              link.href = path;
              link.download = "MockSocial.png";
              link.click();
            }}
          >
            <DownloadIcon size={16} /> Download
          </Button>
        </div>
      )}
    </>
  );
};

export default GeneratedImg;

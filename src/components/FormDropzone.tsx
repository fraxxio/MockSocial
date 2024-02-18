import { useState } from "react";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useUploadThing } from "@/lib/uploadthing";
import { useFormContext } from "@/context/FormContext";
import { imgCleanup } from "@/lib/imgCleanup";

type FormProps = {
  endpoint: "profilePic" | "postPic" | "msgPic";
};

export function FormDropzone({ endpoint }: FormProps) {
  const { setProfilePath, setPostPath, setMsgImg } = useFormContext();
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    startUpload(acceptedFiles);
  };

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(endpoint, {
    onClientUploadComplete: (res) => {
      if (endpoint === "profilePic") setProfilePath(res[0].url);
      if (endpoint === "postPic") setPostPath(res[0].url);
      if (endpoint === "msgPic") setMsgImg(res[0].url);
      imgCleanup(res[0].key);
    },
    onUploadError: () => {
      alert("Something went wrong while uploading the image.");
    },
  });

  const fileTypes = permittedFileInfo?.config ? Object.keys(permittedFileInfo?.config) : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='py-4 border-dashed border-white border-opacity-20 rounded border-2 text-center font-semibold cursor-pointer'>
        {isUploading
          ? "Uploading..."
          : files.length > 0
          ? (files[0] as any).path || "1 file uploaded" //as any for Ts error because path doesn't exist by default
          : "Choose files or drag and drop"}
      </div>
      <p className='text-gray-500 text-sm'>
        {fileTypes[0]?.charAt(0).toUpperCase() + fileTypes[0]?.slice(1)}{" "}
        {permittedFileInfo?.config.image?.maxFileSize}
      </p>
    </div>
  );
}

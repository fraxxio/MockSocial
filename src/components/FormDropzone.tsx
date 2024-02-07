import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useUploadThing } from "@/lib/uploadthing";
import { useState } from "react";
import { useFormContext } from "@/context/FormContext";

type FormProps = {
  endpoint: "profilePic" | "postPic";
};

export function FormDropzone({ endpoint }: FormProps) {
  const { setProfilePath, setPostPath } = useFormContext();
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    startUpload(acceptedFiles);
  };

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(endpoint, {
    onClientUploadComplete: (res) => {
      setProfilePath(res[0].url);
    },
    onUploadError: () => {},
    onUploadBegin: () => {},
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
        {/* {files.length > 0 ? "1 file uploaded" : "Choose files or drag and drop"} */}
      </div>
    </div>
  );
}

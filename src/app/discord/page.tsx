import React from "react";
import MessagePic from "./MessagePic";
import MessageForm from "./MessageForm";
import FormContextProvider from "@/context/FormContext";

const page = () => {
  return (
    <FormContextProvider>
      <div className='py-8 container grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
        <MessagePic />
        <MessageForm />
      </div>
    </FormContextProvider>
  );
};

export default page;

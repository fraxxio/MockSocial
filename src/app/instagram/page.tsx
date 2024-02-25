import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormContextProvider from "@/context/FormContext";
import PostForm from "./PostForm";
import PostPic from "./PostPic";
import MessageForm from "./MessageForm";
import MessagePic from "./MessagePic";

const page = () => {
  return (
    <main className='container py-8'>
      <FormContextProvider>
        <Tabs defaultValue='post' className='w-[400]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='post'>Post</TabsTrigger>
            <TabsTrigger value='message'>Message</TabsTrigger>
          </TabsList>
          <TabsContent value='post'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <PostPic />
              <PostForm />
            </div>
          </TabsContent>
          <TabsContent value='message'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <MessagePic />
              <MessageForm />
            </div>
          </TabsContent>
        </Tabs>
      </FormContextProvider>
    </main>
  );
};
export default page;

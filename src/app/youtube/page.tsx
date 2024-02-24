import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormContextProvider from "@/context/FormContext";
import VideoPic from "./VideoPic";
import VideoForm from "./VideoForm";
import CommunityPic from "./CommunityPic";
import CommunityForm from "./CommunityForm";

const page = () => {
  return (
    <main className='container py-8'>
      <FormContextProvider>
        <Tabs defaultValue='video' className='w-[400]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='video'>Video</TabsTrigger>
            <TabsTrigger value='community'>Community post</TabsTrigger>
          </TabsList>
          <TabsContent value='video'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <VideoPic />
              <VideoForm />
            </div>
          </TabsContent>
          <TabsContent value='community'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <CommunityPic />
              <CommunityForm />
            </div>
          </TabsContent>
        </Tabs>
      </FormContextProvider>
    </main>
  );
};

export default page;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TwitterPost from "./TwitterPost";
import TwitterDM from "./TwitterDM";
import PostPic from "./PostPic";
import DMpic from "./DMpic";
import FormContextProvider from "@/context/FormContext";

export default function TabsDemo() {
  return (
    <main className='container py-8'>
      <FormContextProvider>
        <Tabs defaultValue='post' className='w-[400]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='post'>Post</TabsTrigger>
            <TabsTrigger value='dm'>DM</TabsTrigger>
          </TabsList>
          <TabsContent value='post'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <PostPic />
              <TwitterPost />
            </div>
          </TabsContent>
          <TabsContent value='dm'>
            <div className='grid grid-cols-[45rem_40%] gap-1 items-center justify-between place-content-center max-xl:grid-cols-[40rem] max-xl:justify-around max-xl:gap-4 max-md:grid-cols-1'>
              <DMpic />
              <TwitterDM />
            </div>
          </TabsContent>
        </Tabs>
      </FormContextProvider>
    </main>
  );
}

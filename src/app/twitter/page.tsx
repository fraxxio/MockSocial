import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TwitterPost from "./TwitterPost";
import TwitterDM from "./TwitterDM";
import TwitterComment from "./TwitterComment";
import PostPic from "./PostPic";
import CommentPic from "./CommentPic";
import DMpic from "./DMpic";
import FormContextProvider from "@/context/FormContext";

export default function TabsDemo() {
  return (
    <main className='container py-8'>
      <FormContextProvider>
        <Tabs defaultValue='post' className='w-[400]'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='post'>Post</TabsTrigger>
            <TabsTrigger value='comment'>Comment</TabsTrigger>
            <TabsTrigger value='dm'>DM</TabsTrigger>
          </TabsList>
          <TabsContent value='post'>
            <div className='flex justify-around gap-4 items-center'>
              <PostPic />
              <TwitterPost />
            </div>
          </TabsContent>
          <TabsContent value='comment'>
            <div className='flex justify-between'>
              <CommentPic />
              <TwitterComment />
            </div>
          </TabsContent>
          <TabsContent value='dm'>
            <div className='flex justify-between'>
              <DMpic />
              <TwitterDM />
            </div>
          </TabsContent>
        </Tabs>
      </FormContextProvider>
    </main>
  );
}

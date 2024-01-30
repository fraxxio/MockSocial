import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TwitterPost from "./TwitterPost";
import TwitterDM from "./TwitterDM";
import TwitterComment from "./TwitterComment";

export default function TabsDemo() {
  return (
    <main className='container py-8'>
      <Tabs defaultValue='post' className='w-[400]'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='post'>Post</TabsTrigger>
          <TabsTrigger value='comment'>Comment</TabsTrigger>
          <TabsTrigger value='dm'>DM</TabsTrigger>
        </TabsList>
        <TabsContent value='post'>
          <div className='flex justify-between'>
            <div>
              <h1>This is the tweet</h1>
            </div>
            <TwitterPost />
          </div>
        </TabsContent>
        <TabsContent value='comment'>
          <div className='flex justify-between'>
            <div>
              <h1>This is the comment</h1>
            </div>
            <TwitterComment />
          </div>
        </TabsContent>
        <TabsContent value='dm'>
          <div className='flex justify-between'>
            <div>
              <h1>This is the DM</h1>
            </div>
            <TwitterDM />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

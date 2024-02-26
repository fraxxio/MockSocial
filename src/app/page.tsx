import { CardGrid } from "@/components/CardGrid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className='pt-8 flex flex-col gap-8 justify-around container'>
      <section className='flex flex-col gap-8'>
        <Alert variant='destructive' className='xl:hidden'>
          <AlertTriangle className='h-4 w-4' color='red' />
          <AlertTitle className='text-red-500'>Warning</AlertTitle>
          <AlertDescription className='text-red-500'>
            You are using mobile version of this app, some pictures may not generate correctly. For
            best results use device with 1920x1080 resolution.
          </AlertDescription>
        </Alert>
        <h1 className='text-center text-3xl font-medium'>Select social media platform:</h1>
        <CardGrid />
      </section>
    </main>
  );
}

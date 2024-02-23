import { CardGrid } from "@/components/CardGrid";
//TODO refactor generated component
export default function Home() {
  return (
    <main className='pt-8 flex flex-col gap-8 justify-around container'>
      <section className='flex flex-col gap-8'>
        <h1 className='text-center text-3xl font-medium'>Select social media platform:</h1>
        <CardGrid />
      </section>
    </main>
  );
}

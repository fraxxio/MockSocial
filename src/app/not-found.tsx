import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const notFound = () => {
  return (
    <div className='container flex flex-col gap-2 items-center justify-center h-80 text-yellow-400 text-2xl'>
      <div className='flex items-center gap-2'>
        <HelpCircle size={40} />
        <p>404 This page doesn&apos;t exist.</p>
      </div>
      <Link href='/' className='text-blue-400 underline text-lg'>
        Go to home page.
      </Link>
    </div>
  );
};

export default notFound;

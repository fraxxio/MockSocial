import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const CardGrid = () => {
  return (
    <div className='grid gap-2  gap-y-6 grid-cols-4'>
      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>
            {" "}
            <Twitter /> Twitter / X
          </CardTitle>
          <CardDescription>Posts, comments, messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle>Discord</CardTitle>
          <CardDescription>Messages</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>
            <Facebook /> Facebook
          </CardTitle>
          <CardDescription>Posts, comments, messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>
            <Youtube />
            Youtube
          </CardTitle>
          <CardDescription>Videos, community posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>
            <Linkedin /> LinkedIn
          </CardTitle>
          <CardDescription>Posts, messages, job listings.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>
            <Instagram /> Instagram
          </CardTitle>
          <CardDescription>Posts, messages, stories.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

      <Card className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'>
        <CardHeader>
          <CardTitle className='flex gap-2'>ChatGPT</CardTitle>
          <CardDescription>Messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};

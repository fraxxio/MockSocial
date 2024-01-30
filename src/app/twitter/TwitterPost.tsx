import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TwitterPost = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Twitter post</CardTitle>
        <CardDescription>Fill out the input fields or leave default value.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' defaultValue='@peduarte' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='usernamehandle'>Username handle</Label>
          <Input id='usernamehandle' defaultValue='@peduarte' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='date'>Date</Label>
          <Input id='date' defaultValue='15h' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='text'>Text</Label>
          <Input id='text' defaultValue='Tweet text' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='pic'>Picture</Label>
          <Input id='pic' type='file' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='comments'>Comments</Label>
          <Input id='comments' defaultValue='351' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='reposts'>Reposts</Label>
          <Input id='reposts' defaultValue='12' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='likes'>Likes</Label>
          <Input id='likes' defaultValue='12000' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='views'>Views</Label>
          <Input id='views' defaultValue='58000' />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Generate picture</Button>
      </CardFooter>
    </Card>
  );
};

export default TwitterPost;

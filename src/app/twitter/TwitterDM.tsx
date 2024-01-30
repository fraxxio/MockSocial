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

const TwitterDM = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Twitter DM</CardTitle>
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
          <Input id='text' defaultValue='Message text' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='pic'>Picture</Label>
          <Input id='pic' type='file' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='react'>Reaction emoji</Label>
          <Input id='react' defaultValue='😍' />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Generate picture</Button>
      </CardFooter>
    </Card>
  );
};

export default TwitterDM;

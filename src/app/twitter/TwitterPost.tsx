"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TwitterPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Username",
      usernamehandle: "@user",
      date: 15,
      text: "Hello",
      profilepic: undefined,
      postpic: undefined,
      comments: 5,
      reposts: 51,
      likes: 1500,
      views: 24111,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Twitter post</CardTitle>
        <CardDescription>Fill out the input fields or leave default value.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='usernamehandle'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username Handle</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='profilepic'
              render={({ field: { onChange }, ...field }) => (
                <FormItem>
                  <FormLabel>Profle Picture</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      {...field}
                      onChange={(event) => {
                        // Triggered when user uploaded a new file
                        // FileList is immutable, so we need to create a new one
                        const dataTransfer = new DataTransfer();
                        const images = form.watch("profilepic");
                        // Add old images
                        if (images) {
                          Array.from(images).forEach((image) => dataTransfer.items.add(image));
                        }
                        // Add newly uploaded images
                        Array.from(event.target.files!).forEach((image) =>
                          dataTransfer.items.add(image)
                        );
                        // Validate and update uploaded file
                        const newFiles = dataTransfer.files;
                        onChange(newFiles);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='postpic'
              render={({ field: { onChange }, ...field }) => (
                <FormItem>
                  <FormLabel>Post Picture</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      {...field}
                      onChange={(event) => {
                        // Triggered when user uploaded a new file
                        // FileList is immutable, so we need to create a new one
                        const dataTransfer = new DataTransfer();
                        const images = form.watch("profilepic");
                        // Add old images
                        if (images) {
                          Array.from(images).forEach((image) => dataTransfer.items.add(image));
                        }
                        // Add newly uploaded images
                        Array.from(event.target.files!).forEach((image) =>
                          dataTransfer.items.add(image)
                        );
                        // Validate and update uploaded file
                        const newFiles = dataTransfer.files;
                        onChange(newFiles);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='comments'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='reposts'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reposts</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='likes'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Likes</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='views'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Views</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Generate Picture</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TwitterPost;

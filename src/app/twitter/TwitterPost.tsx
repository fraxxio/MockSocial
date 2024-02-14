"use client";
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
import { useFormContext } from "@/context/FormContext";
import { useEffect } from "react";
import { FormDropzone } from "@/components/FormDropzone";
import { useToPng } from "@hugocxl/react-to-image";

const TwitterPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      usernamehandle: "@mocksocial",
      date: "15h",
      text: "If you like this app give us a star on Github!",
      comments: 5,
      reposts: 51,
      likes: 1500,
      views: 240111,
    },
  });

  const watchForm = form.watch();
  const { setFormData, setImg } = useFormContext();

  useEffect(() => {
    setFormData({
      username: watchForm.username || "Mocksocial",
      usernamehandle: watchForm.usernamehandle || "@mocksocial",
      date: watchForm.date || "15h",
      text: watchForm.text || "Hello",
      comments: watchForm.comments || 5,
      reposts: watchForm.reposts || 51,
      likes: watchForm.likes || 1500,
      views: watchForm.views || 24111,
    });
  }, [
    watchForm.username,
    watchForm.usernamehandle,
    watchForm.date,
    watchForm.text,
    watchForm.comments,
    watchForm.reposts,
    watchForm.likes,
    watchForm.views,
  ]);

  const [state, convert] = useToPng<HTMLDivElement>({
    selector: "#TwitterPost",
    onSuccess: (data) => {
      setImg(data);
      // const img = new Image();
      // img.src = data;
      // document.body.appendChild(img);
    },
    onError: (error) => console.log("Error", error),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    convert();
    //console.log(values);
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
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormDropzone endpoint='profilePic' />
            </FormItem>
            <FormItem>
              <FormLabel>Tweet Picture</FormLabel>
              <FormDropzone endpoint='postPic' />
            </FormItem>
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

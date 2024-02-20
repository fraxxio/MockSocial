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
import { Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TwitterPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      usernamehandle: "mocksocial",
      date: "15h",
      text: "If you like this app give us a star on Github!",
      comments: 5,
      reposts: 51,
      likes: 1500,
      views: 240111,
      badge: "none",
      theme: "black",
    },
  });

  const watchForm = form.watch();
  const { setTwitterPostForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setTwitterPostForm({
      username: watchForm.username || "Mocksocial",
      usernamehandle: watchForm.usernamehandle || "mocksocial",
      date: watchForm.date || "15h",
      text: watchForm.text || "",
      comments: watchForm.comments || 5,
      reposts: watchForm.reposts || 51,
      likes: watchForm.likes || 1500,
      views: watchForm.views || 24111,
      badge: watchForm.badge || "none",
      theme: watchForm.theme || "black",
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
    watchForm.badge,
    watchForm.theme,
  ]);

  const [{ isLoading }, convert] = useToPng<HTMLDivElement>({
    pixelRatio: 2.8,
    selector: "#TwitterPost",
    onSuccess: (data) => {
      setGeneratedImg((prevdata) => ({ ...prevdata, twitterPost: data }));
    },
    onError: (error) => alert(`Error: ${error}. Try again.`),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Twitter post</CardTitle>
        <CardDescription>Fill out the input fields or leave default value.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='space-y-3'>
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
                    <Input {...field} type='number' />
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
                    <Input {...field} type='number' />
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
                    <Input {...field} type='number' />
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
                    <Input {...field} type='number' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='theme'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Theme</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='black' />
                        </FormControl>
                        <FormLabel className='font-normal'>Black</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='white' />
                        </FormControl>
                        <FormLabel className='font-normal'>White</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='dim' />
                        </FormControl>
                        <FormLabel className='font-normal'>Dim</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='badge'
              render={({ field }) => (
                <FormItem className='pb-4'>
                  <FormLabel>User badge</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='none' />
                        </FormControl>
                        <FormLabel className='font-normal'>None</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='verified' />
                        </FormControl>
                        <FormLabel className='font-normal'>Verified</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='company' />
                        </FormControl>
                        <FormLabel className='font-normal'>Company</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='government' />
                        </FormControl>
                        <FormLabel className='font-normal'>Government organization</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={isLoading} className='gap-1' onClick={convert}>
              {isLoading ? (
                <>
                  <Loader2 className='animate-spin w-4 h-4' /> Generating
                </>
              ) : (
                "Generate Picture"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TwitterPost;

"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const TwitterPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      date: "Jan 30, 2024, 2:03 PM",
      text: "Yo, what's up?",
      reaction: "",
      sendertext: "",
      senderdate: "Jan 30, 2024, 5:22 PM",
      senderreaction: "",
      badge: "none",
      theme: "black",
      reverseorder: false,
    },
  });

  const watchForm = form.watch();
  const { setTwitterDMForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setTwitterDMForm({
      username: watchForm.username || "Mocksocial",
      date: watchForm.date || "15h",
      text: watchForm.text || "",
      reaction: watchForm.reaction || "",
      sendertext: watchForm.sendertext || "",
      senderdate: watchForm.senderdate || "2m",
      senderreaction: watchForm.senderreaction || "",
      badge: watchForm.badge || "none",
      theme: watchForm.theme || "black",
      reverseorder: watchForm.reverseorder || false,
    });
  }, [
    setTwitterDMForm,
    watchForm.username,
    watchForm.date,
    watchForm.text,
    watchForm.reaction,
    watchForm.badge,
    watchForm.theme,
    watchForm.reverseorder,
    watchForm.sendertext,
    watchForm.senderdate,
    watchForm.senderreaction,
  ]);

  const [{ isLoading }, convert] = useToPng<HTMLDivElement>({
    pixelRatio: 2.8,
    selector: "#TwitterDM",
    onSuccess: (data) => {
      setGeneratedImg((prevdata) => ({ ...prevdata, twitterDM: data }));
    },
    onError: (error) => alert(`Error: ${error}. Try again.`),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Twitter DM</CardTitle>
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
                  <FormLabel>Recipient username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Recipient profile picture</FormLabel>
              <FormDropzone endpoint='profilePic' />
            </FormItem>
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
                  <FormLabel>Message text</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='reaction'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Reaction emoji.{" "}
                    <Link
                      className='underline text-blue-500'
                      href={"https://www.piliapp.com/twitter-symbols/"}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Emoji list
                    </Link>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Message picture</FormLabel>
              <FormDropzone endpoint='postPic' />
            </FormItem>
            <FormItem className='py-4'>
              <div className='h-[1px] w-full bg-gray-500 bg-opacity-50'></div>
            </FormItem>
            <FormField
              control={form.control}
              name='sendertext'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sender&apos;s message text</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='senderdate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sender&apos;s message date</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='senderreaction'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Reaction emoji.{" "}
                    <Link
                      className='underline text-blue-500'
                      href={"https://www.piliapp.com/twitter-symbols/"}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Emoji list
                    </Link>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Sender&apos;s message picture</FormLabel>
              <FormDropzone endpoint='msgPic' />
            </FormItem>
            <FormField
              control={form.control}
              name='reverseorder'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                  <div className='space-y-0.5'>
                    <FormLabel>Reverse message order</FormLabel>
                    <FormDescription>
                      Don&apos;t forget to use correct dates on messages!
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
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

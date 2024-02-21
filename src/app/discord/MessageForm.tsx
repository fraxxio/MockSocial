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

const MessageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      date: "02/18/2024 11:47 PM",
      text: "Yo, what's up? @Mocksocial",
      reaction: "",
      senderusername: "",
      sendertext: "",
      senderdate: "02/18/2024 5:10 PM",
      senderreaction: "",
      theme: "dark",
      reverseorder: false,
    },
  });

  const watchForm = form.watch();
  const { setDiscordForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setDiscordForm({
      username: watchForm.username || "Mocksocial",
      date: watchForm.date || "02/18/2024 11:47 PM",
      text: watchForm.text || "",
      reaction: watchForm.reaction || "",
      senderusername: watchForm.senderusername || "",
      sendertext: watchForm.sendertext || "",
      senderdate: watchForm.senderdate || "02/18/2024 5:10 PM",
      senderreaction: watchForm.senderreaction || "",
      theme: watchForm.theme || "dark",
      reverseorder: watchForm.reverseorder || false,
    });
  }, [
    watchForm.username,
    watchForm.date,
    watchForm.text,
    watchForm.reaction,
    watchForm.theme,
    watchForm.reverseorder,
    watchForm.sendertext,
    watchForm.senderusername,
    watchForm.senderdate,
    watchForm.senderreaction,
  ]);

  const [{ isLoading }, convert] = useToPng<HTMLDivElement>({
    pixelRatio: 2.8,
    selector: "#DiscordMessage",
    onSuccess: (data) => {
      setGeneratedImg((prevdata) => ({ ...prevdata, discord: data }));
    },
    onError: (error) => alert(`Error: ${error}. Try again.`),
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Discord messages</CardTitle>
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
                    <FormLabel>Recipient message text</FormLabel>
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
                      Reaction to recipient message.{" "}
                      <Link
                        className='underline text-blue-500'
                        href={"https://emojis.wiki/discord/"}
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
                <FormLabel>Recipient message picture</FormLabel>
                <FormDropzone endpoint='postPic' />
              </FormItem>
              <FormItem className='py-4'>
                <div className='h-[1px] w-full bg-gray-500 bg-opacity-50'></div>
              </FormItem>
              <FormField
                control={form.control}
                name='senderusername'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sender's username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Sender's profile picture</FormLabel>
                <FormDropzone endpoint='msgProfilePic' />
              </FormItem>
              <FormField
                control={form.control}
                name='senderdate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sender's message date</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='sendertext'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sender's message text</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
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
                      Reaction to sender's message.{" "}
                      <Link
                        className='underline text-blue-500'
                        href={"https://emojis.wiki/discord/"}
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
                <FormLabel>Sender's message picture</FormLabel>
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
                        Don't forget to use correct dates on messages!
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
                  <FormItem className='pb-4'>
                    <FormLabel>Theme</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex flex-col space-y-1'
                      >
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='dark' />
                          </FormControl>
                          <FormLabel className='font-normal'>Dark</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='light' />
                          </FormControl>
                          <FormLabel className='font-normal'>Light</FormLabel>
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
    </div>
  );
};

export default MessageForm;

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
      text: "If you like this app give us a star on Github!",
      reaction: "",
      senderusername: "",
      senderreaction: "",
      sendertext: "",
      theme: "light",
    },
  });

  const watchForm = form.watch();
  const { setFbMessageForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setFbMessageForm({
      username: watchForm.username || "Mocksocial",
      text: watchForm.text || "",
      reaction: watchForm.reaction || "",
      senderusername: watchForm.senderusername || "",
      sendertext: watchForm.sendertext || "",
      senderreaction: watchForm.senderreaction || "",
      theme: watchForm.theme || "light",
    });
  }, [
    watchForm.username,
    watchForm.text,
    watchForm.reaction,
    watchForm.sendertext,
    watchForm.senderusername,
    watchForm.senderreaction,
    watchForm.theme,
  ]);

  const [{ isLoading }, convert] = useToPng<HTMLDivElement>({
    pixelRatio: 2.8,
    selector: "#FacebookComment",
    onSuccess: (data) => {
      setGeneratedImg((prevdata) => ({ ...prevdata, fbPost: data }));
    },
    onError: (error) => alert(`Error: ${error}. Try again.`),
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Facebook message</CardTitle>
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
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Text</FormLabel>
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
              <FormLabel>Message Picture</FormLabel>
              <FormDropzone endpoint='postPic' />
            </FormItem>
            <FormField
              control={form.control}
              name='reaction'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Reaction emoji.{" "}
                    <Link
                      className='underline text-blue-500'
                      href={"https://fbicons.net/"}
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
            <FormItem>
              <FormLabel>Sender's profile Picture</FormLabel>
              <FormDropzone endpoint='msgProfilePic' />
            </FormItem>
            <FormItem>
              <FormLabel>Sender's message picture</FormLabel>
              <FormDropzone endpoint='msgPic' />
            </FormItem>
            <FormField
              control={form.control}
              name='senderreaction'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Sender's reaction emoji.{" "}
                    <Link
                      className='underline text-blue-500'
                      href={"https://fbicons.net/"}
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
  );
};

export default MessageForm;

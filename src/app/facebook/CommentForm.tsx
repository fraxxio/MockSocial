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

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      date: "15h",
      text: "If you like this app give us a star on Github!",
      likes: 1500,
      badge: "none",
      theme: "light",
    },
  });

  const watchForm = form.watch();
  const { setFbCommentForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setFbCommentForm({
      username: watchForm.username || "Mocksocial",
      date: watchForm.date || "15h",
      text: watchForm.text || "",
      likes: watchForm.likes || 1500,
      badge: watchForm.badge || "none",
      theme: watchForm.theme || "light",
    });
  }, [
    watchForm.username,
    watchForm.date,
    watchForm.text,
    watchForm.likes,
    watchForm.badge,
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
        <CardTitle>Facebook comment</CardTitle>
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
                  <FormLabel>Comment Text</FormLabel>
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
              <FormLabel>Comment Picture</FormLabel>
              <FormDropzone endpoint='postPic' />
            </FormItem>
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

export default CommentForm;

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
import { Switch } from "@/components/ui/switch";

const MessageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mocksocial",
      text: "How can I help you?",
      sendertext: "Hello",
      theme: "dark",
      reverseorder: false,
    },
  });

  const watchForm = form.watch();
  const { setChatGptForm, setGeneratedImg } = useFormContext();

  useEffect(() => {
    setChatGptForm({
      username: watchForm.username || "Mocksocial",
      text: watchForm.text || "",
      sendertext: watchForm.sendertext || "",
      theme: watchForm.theme || "dark",
      reverseorder: watchForm.reverseorder || false,
    });
  }, [
    watchForm.username,
    watchForm.text,
    watchForm.sendertext,
    watchForm.theme,
    watchForm.reverseorder,
  ]);

  const [{ isLoading }, convert] = useToPng<HTMLDivElement>({
    pixelRatio: 2.8,
    selector: "#ChatGpt",
    onSuccess: (data) => {
      setGeneratedImg((prevdata) => ({ ...prevdata, chatGpt: data }));
    },
    onError: (error) => alert(`Error: ${error}. Try again.`),
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>ChatGPT messages</CardTitle>
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
                <FormLabel>Profile picture</FormLabel>
                <FormDropzone endpoint='profilePic' />
              </FormItem>
              <FormField
                control={form.control}
                name='text'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ChatGPT message text</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
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

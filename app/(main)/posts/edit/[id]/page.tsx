"use client";

import BackButton from "@/components/Shared/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { CloudCog } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  body: z.string().min(1, {
    message: "Body is required",
  }),
  author: z.string().min(1, {
    message: "Author is required",
  }),
  date: z.string().min(1, {
    message: "Date is required",
  }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = () => {
  const params= useParams();
  const { toast } = useToast();
  const post = posts.find((post) => post.id === params.id);
  //   console.log(post);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title:"Post has been updated successfully",
      description:`Updated By ${post?.author} on ${post?.date}`
    });
  };

  return (
    <div>
      <BackButton text="Back To Posts" link="/posts"></BackButton>
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white  focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Body */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white  focus-visible:ring-offset-0"
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* author */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white  focus-visible:ring-offset-0"
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white  focus-visible:ring-offset-0"
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white">Update Post</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;

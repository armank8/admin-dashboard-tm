"use client";

import BackButton from "@/components/Shared/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

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

import FormInputComponent from "@/components/Shared/FormInput";
import FormInput from "@/components/Shared/FormInput";
import FormTextArea from "@/components/Shared/FormTextArea";

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
  test: z.string().min(1, {
    message: "Test data is required",
  }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = () => {
  const params = useParams();
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
      test: post?.test || "testing",

    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Post has been updated successfully",
      description: `Updated By ${post?.author} on ${post?.date}`,
    });
  };

  return (
    <div>
      <BackButton text="Back To Posts" link="/posts"></BackButton>
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">

          <FormInput form={form}  name="title" label="Title" ></FormInput>
          <FormTextArea form={form}  name="body" label="body" ></FormTextArea>
          <FormInput form={form}  name="author" label="Author" ></FormInput>
          <FormInput form={form}  name="date" label="Date" ></FormInput>
          {/* Testing */}
          <FormInput form={form}  name="test" label="Test" ></FormInput>

          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Update Post
          </Button>
          
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;

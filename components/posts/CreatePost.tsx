"use client";

import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { z } from "zod";
import * as z from "zod";
import FormInput from "@/components/Shared/FormInput";
import FormTextArea from "@/components/Shared/FormTextArea";

import { Button } from "@/components/ui/button";

interface CreatePostProps {
  title?: string;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  body: z.string().min(1, {
    message: "body is required",
  }),
  author: z.string().min(1, {
    message: "author is required",
  }),
  date: z.string().min(1, {
    message: "date is required",
  }),
  test: z.string().optional()
});

export default function CreatePost({ title }: CreatePostProps) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      author: "",
      date: "",
      test:""
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Post has been Created successfully",
      description: `Created post `,
    });
  };
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : " Create Post"}
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8"
        >
          <FormInput form={form}  name="title" label="Title" ></FormInput>
          <FormTextArea form={form}  name="body" label="body" ></FormTextArea>
          <FormInput form={form}  name="author" label="Author" ></FormInput>
          <FormInput form={form}  name="date" label="Date" ></FormInput>
          {/* Testing */}
          <FormInput form={form}  name="test" label="Test" ></FormInput>

          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Create Post
          </Button>
        </form>
      </Form>
    </div>
  );
}

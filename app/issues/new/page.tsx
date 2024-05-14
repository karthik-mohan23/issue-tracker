"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

type NewIssueType = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const { register, handleSubmit, control } = useForm<NewIssueType>();
  const onSubmit: SubmitHandler<NewIssueType> = async (data) => {
    try {
      const response = await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("Something went wrong, please try again later");
    }
  };

  return (
    <section className="max-w-3xl">
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="pt-6 space-y-6">
        <TextField.Root radius="large">
          <TextField.Input placeholder="Enter Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Enter Description…" {...field} />
          )}
        />
        <Button size="3" variant="soft">
          Submit New Issue
        </Button>
      </form>
    </section>
  );
};
export default NewIssuePage;

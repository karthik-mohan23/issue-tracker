"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";

type NewIssueType = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewIssueType>();
  const onSubmit: SubmitHandler<NewIssueType> = async (data) => {
    try {
      const response = await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("Something went wrong, please try again later");
      setTimeout(() => {
        setError("");
      }, 3000);
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
          <TextField.Input
            placeholder="Enter Title"
            {...(register("title"), { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === "required" && (
            <Text color="red" as="p">
              {errors.title.message}
            </Text>
          )}
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Email Address is required" }}
          render={({ field }) => (
            <SimpleMDE placeholder="Enter Description…" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button size="3" variant="soft">
          Submit New Issue
        </Button>
      </form>
    </section>
  );
};
export default NewIssuePage;

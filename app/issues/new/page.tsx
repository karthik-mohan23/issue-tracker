"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type NewIssueType = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const router = useRouter();

  const { register, handleSubmit, control } = useForm<NewIssueType>();
  const onSubmit: SubmitHandler<NewIssueType> = async (data) => {
    const response = await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl space-y-6">
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
  );
};
export default NewIssuePage;

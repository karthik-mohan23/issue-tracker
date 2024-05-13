"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <section className="max-w-3xl space-y-6">
      <TextField.Root radius="large">
        <TextField.Input placeholder="Enter Title" />
      </TextField.Root>

      <SimpleMDE placeholder="Enter Description…" />
      <Button size="3" variant="soft">
        Submit New Issue
      </Button>
    </section>
  );
};
export default NewIssuePage;

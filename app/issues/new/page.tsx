"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <section className="max-w-3xl space-y-6">
      <TextField.Root radius="large">
        <TextField.Input placeholder="Enter Title" />
      </TextField.Root>

      <TextArea placeholder="Enter Description…" />
      <Button size="3" variant="soft">
        Submit New Issue
      </Button>
    </section>
  );
};
export default NewIssuePage;

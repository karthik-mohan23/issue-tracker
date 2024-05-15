import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

type IssueDetailsParam = {
  params: { id: string };
};

const IssueDetailsPage = async ({ params }: IssueDetailsParam) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!issue) {
    return notFound();
  }

  return (
    <div>
      <p>{issue?.title}</p>
      <p>{issue?.description}</p>
      <p>{issue?.status}</p>
      <p>{issue?.createdAt.toDateString()}</p>
    </div>
  );
};
export default IssueDetailsPage;

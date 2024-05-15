import prisma from "@/prisma/client";

type IssueDetailsParam = {
  params: { id: string };
};

const IssueDetailsPage = async ({ params }: IssueDetailsParam) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });

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

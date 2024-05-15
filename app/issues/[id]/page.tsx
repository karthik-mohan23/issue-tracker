import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

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
      <Heading color="gray" highContrast>
        {issue?.title}
      </Heading>
      <Flex gap="6" py="5">
        <IssueStatusBadge status={issue?.status} />
        <p>{issue?.createdAt.toDateString()}</p>
      </Flex>

      <Card className="prose">
        <Markdown>{issue?.description}</Markdown>
      </Card>
    </div>
  );
};
export default IssueDetailsPage;

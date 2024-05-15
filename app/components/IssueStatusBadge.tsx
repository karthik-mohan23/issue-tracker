import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

type IssueStatusBadgeProps = {
  status: Status;
};

const statuses: Record<
  Status,
  { label: string; color: "blue" | "orange" | "green" }
> = {
  OPEN: { label: "Open", color: "green" },
  CLOSED: { label: "Closed", color: "orange" },
  IN_PROGRESS: { label: "In progress", color: "blue" },
};

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <Badge variant="soft" highContrast color={statuses[status].color} size="2">
      {statuses[status].label}
    </Badge>
  );
};
export default IssueStatusBadge;

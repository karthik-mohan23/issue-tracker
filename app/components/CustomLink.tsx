import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

type CustomLinkProps = {
  href: string;
  children: string;
};

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <RadixLink underline="hover" weight="bold">
        {children}
      </RadixLink>
    </Link>
  );
};
export default CustomLink;

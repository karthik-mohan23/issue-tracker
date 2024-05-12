import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const Navbar = () => {
  return (
    <nav className=" text-black border-b  py-6 shadow-sm">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto w-[90%] ">
        <Link href="/">
          <AiFillBug size={30} className="hover:" />
        </Link>
        <ul className="flex items-center gap-16">
          {links.map((link) => (
            <li
              key={link.href}
              className="text-zinc-500 hover:text-zinc-800 duration-300">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname('/');
    const isActive = href === pathname;

    return (
       <Link href={href} className={`${isActive ? "text-(--rust) border-b border-b-(--rust)" : ""} `}>
       {children}
       </Link>
    );
};

export default NavLink;
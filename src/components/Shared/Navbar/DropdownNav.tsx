import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa6";
import { navItems } from "@/components/Shared/Navbar/NavItems";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DropdownNav = () => {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FaBars className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={`link ${pathname === item.href ? "text-prime" : ""}`}>
            <DropdownMenuItem>{item.title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNav;

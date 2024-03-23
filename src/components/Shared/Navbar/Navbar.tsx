"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LogoAndName from "@/components/Shared/LogoAndName/LogoAndName";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Shared/Themes/Mode";
import { navItems } from "@/components/Shared/Navbar/NavItems";
import DropdownNav from "@/components/Shared/Navbar/DropdownNav";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="container pt-5 flex items-center justify-between">
      {/* Website name */}
      <LogoAndName />
      <NavigationMenu>
        <NavigationMenuList className="">
          {/* nav items */}
          {navItems.map((item) => (
            <NavigationMenuItem
              key={item.title}
              className="ml-auto lg:block hidden">
              <Link
                href={item?.href}
                legacyBehavior
                passHref>
               <NavigationMenuLink className={`link ${navigationMenuTriggerStyle()} ${pathname === item.href ? "text-prime" : ""}`}>
          {item.title}
        </NavigationMenuLink>

              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Button size="sm" >Login</Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="md:px-3 px-1 lg:hidden">
            <DropdownNav />
          </NavigationMenuItem>
          <NavigationMenuItem className="lg:pl-3">
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

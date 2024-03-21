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
import LogoAndName from "@/components/LogoAndName/LogoAndName";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Themes/Mode";

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Portfolio",
    href: "/our-portfolio",
  },
  {
    title: "Our Team",
    href: "/our-team",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export function NavigationMenuDemo() {
  return (
    <nav className="container mt-5 flex items-center justify-between">
      {/* Website name */}
      <LogoAndName />
      <NavigationMenu>
        <NavigationMenuList>
          {/* nav items */}
          {components.map((component) => (
            <NavigationMenuItem key={component.title} className="ml-auto">
              <Link href={component?.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {component.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Button>Login</Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="pl-3">
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

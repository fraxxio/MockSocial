"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className='border-b  border-opacity-5 backdrop-blur-sm'>
      <nav className='flex justify-between max-sm:flex-col max-sm:gap-2 items-center py-3 container'>
        <Link href='/'>
          <h1 className='font-semibold text-2xl'>MockSocial</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className='gap-1'>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Legal</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='flex flex-col p-1 w-max'>
                  <li>
                    <Link href='/' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Terms of service
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Privacy rules
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  How to use?
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

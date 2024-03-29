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
import Image from "next/image";
import { Star } from "lucide-react";

export const Header = () => {
  return (
    <header className='border-b  border-opacity-5 backdrop-blur-sm'>
      <nav className='flex justify-between max-sm:flex-col max-sm:gap-2 items-center py-3 container'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/Logo.png' width={32} height={32} alt='Logo' />
          <h1 className='font-semibold text-2xl'>MockSocial</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className='gap-1'>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='flex flex-col p-1 w-max'>
                  <li>
                    <Link href='/termsofservice' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Terms of service
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/guide' legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Guide
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='https://github.com/fraxxio/MockSocial' legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + "cflex items-center gap-2"}
                >
                  <Star size={18} /> Star us on Github
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

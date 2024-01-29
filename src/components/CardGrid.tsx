import React from "react";
import Cards from "@/lib/Cards.json";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CardGrid = () => {
  return (
    <div className='grid gap-2  gap-y-6 grid-cols-4'>
      {Cards.map((UiCard) => {
        return (
          <Link href={UiCard.route}>
            <Card
              key={UiCard.title}
              className='w-[300px] hover:border-gray-500 duration-150 cursor-pointer'
            >
              <CardHeader>
                <CardTitle>{UiCard.title}</CardTitle>
                <CardDescription>{UiCard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={UiCard.img} alt='Example' width={700} height={700} />
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

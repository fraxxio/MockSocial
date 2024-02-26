import React from "react";
import Cards from "@/lib/Cards.json";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CardGrid = () => {
  return (
    <div className='grid gap-2 gap-y-6 grid-cols-3 max-xl:grid-cols-2 max-xl:justify-items-center max-[880px]:grid-cols-1'>
      {Cards.map((UiCard) => {
        return (
          <Link href={UiCard.route} key={UiCard.title}>
            <Card
              key={UiCard.title}
              className='w-[25rem] h-[23rem] hover:border-gray-500 duration-150 cursor-pointer overflow-hidden relative max-[880px]:w-[18rem] max-[880px]:h-[18rem]'
            >
              <CardHeader>
                <CardTitle>{UiCard.title}</CardTitle>
                <CardDescription>{UiCard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={UiCard.img}
                  alt='Example'
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    maxHeight: "15rem",
                    objectFit: "contain",
                  }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

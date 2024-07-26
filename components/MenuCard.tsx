import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

interface MenuProps {
  src: string;
  title: string;
}

const MenuCard = ({ src, title }: MenuProps) => {
  return (
    <Card className="w-[350px] xl:w-[400px]">
      <CardHeader>
        <Image
          src={src}
          alt=""
          height={300}
          width={400}
          className="rounded-lg h-[250px]"
        />
      </CardHeader>
      <CardContent>
        <h1 className="text-white text-xl font-medium">{title}</h1>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

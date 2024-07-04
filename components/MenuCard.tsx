import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

const MenuCard = () => {
  return (
    <Card className="w-[350px] xl:w-[400px]">
      <CardHeader>
        <Image
          src={
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          height={300}
          width={400}
          className="rounded-lg h-[250px]"
        />
      </CardHeader>
      <CardContent>
        <h1 className="text-white text-xl font-medium">Chicken tikka masala</h1>
        <p className="text-lg text-muted-foreground pt-2">
          Most popular dish all over,chicken tikka boneless grilled chicken
          cooked in a spiced curry sauce
        </p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

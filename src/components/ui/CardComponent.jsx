import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

export function CardComponent({ products }) {
  const safeimage =
    products?.imageUrl ||
    "https://img.freepik.com/free-psd/macbook-mockup-floating_1332-60671.jpg?semt=ais_hybrid&w=740&q=80";
  return (
    <div className=" m-5  ">
      <Card className=" relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <div className="relative w-full aspect-video ">
          <Image
            src={safeimage}
            alt="Event cover"
            fill
            className="object-cover brightness-60 grayscale dark:brightness-40"
          />
        </div>

        <CardHeader className="">
          <CardAction className="font-bold text-1xl ">
            ${products.price}
          </CardAction>
          <CardTitle>{products.name}</CardTitle>
          <CardDescription>
            {" "}
            {products?.description.length > 60
              ? products?.description.slice(0, 60) + "..."
              : products?.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">View Products</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

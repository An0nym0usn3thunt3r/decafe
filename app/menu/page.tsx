import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  const menuItems = [
    { title: "Fast Food Menu", image: "/chole.jpg" },
    { title: "Main Course", image: "/chole.jpg" },
    { title: "Desserts", image: "/chole.jpg" },
  ];

  return (
    <div className="pt-16 md:pt-24 lg:pt-[10rem] max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="flex flex-col gap-y-8 md:gap-y-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-semibold">
          Our Menu
        </h1>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-md lg:max-w-2xl font-medium">
          Your favorite local restaurant is now available for pick-up and
          delivery options now with Beyond Menu
        </p>
        
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-8">
            {index % 2 === 0 ? (
              <>
                <MenuCard title={item.title} />
                <ImageCard imageSrc={item.image} className="hidden lg:block" />
              </>
            ) : (
              <>
                <ImageCard imageSrc={item.image} className="hidden lg:block" />
                <MenuCard title={item.title} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuCard = ({ title }: { title: string }) => (
  <Card className="flex-1 flex flex-col">
    <CardHeader>
      <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl">{title}</CardTitle>
      <CardDescription className="text-sm md:text-base">
      Step into our colorful restro cafe, where every dish is a delightful fusion of flavor and tradition. Treat your taste buds to the richness of our Paneer Tikka Wrap, featuring succulent paneer tikka, onions, and bell peppers, enveloped in a warm, flaky paratha for an authentic Indian street food experience. Sample our crispy Masala Fries, adorned with a tantalizing blend of aromatic spices that evoke the vibrant streets of India. Spice enthusiasts will relish our Tangy Tandoori Gobi, showcasing tender cauliflower florets marinated in a zesty tandoori blend and expertly charred in the tandoor, delivering a burst of smoky flavors with every bite. Craving something cool and refreshing? Our Chaat Salad offers a medley of crunchy papdi, tangy tamarind chutney, fresh yogurt, and an assortment of crisp vegetables, creating a symphony of flavors reminiscent of bustling Indian bazaars. Whether you seek familiar favorites or crave a tantalizing twist, our vegetarian Indian-style fast food menu promises an exhilarating culinary journey through the streets of India with every delectable morsel.
      </CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <Image
              src="/chole.jpg"
              alt=""
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-gray-800">Cholle bhature</h3>
            <div className="flex-grow border-t border-yellow-400 mt-2"></div>
          </div>
        </div>
      ))}
    </CardContent>
    <CardFooter>
      <Link href="/">
        <button className="space-links text-sm md:text-base text-white px-3 py-2 rounded-md flex pr-5 bg-[#AB8A54]">
          View All Menu -&gt;
        </button>
      </Link>
    </CardFooter>
  </Card>
);

const ImageCard = ({ imageSrc, className }: { imageSrc: string, className?: string }) => (
  <Card className={className}>
    <CardHeader className="gap-y-10">
      <Image
        src={imageSrc}
        alt=""
        width={300}
        height={400}
        className="rounded-full"
      />
      <Image
        src={imageSrc}
        alt=""
        width={300}
        height={400}
        className="rounded-full"
      />
    </CardHeader>
  </Card>
);

export default MenuPage;
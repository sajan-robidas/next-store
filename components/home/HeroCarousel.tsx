import image1 from "@/public/images/hero1.jpg";
import image2 from "@/public/images/hero2.jpg";
import image3 from "@/public/images/hero3.jpg";
import image4 from "@/public/images/hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {Card, CardContent} from "../ui/card";
import Image from "next/image";

const carouselImages = [image1, image2, image3, image4];

function HeroCarousel() {
  return (
    <Carousel className="hidden lg:block">
      <CarouselContent>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt="hero"
                    className="w-full h-[24rem] rounded object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;

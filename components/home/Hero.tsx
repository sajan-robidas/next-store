import Link from "next/link";
import {Button} from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          suscipit architecto magni vitae earum tempore eos doloribus provident
          facilis recusandae.
        </p>
        <Button asChild size="lg">
          <Link href="/products" className="mt-10">
            Our Products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;

import {Product} from "@prisma/client";
import {formatCurrency} from "@/utils/format";
import Link from "next/link";
import {Card, CardContent} from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({products}: {products: Product[]}) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const {name, image, price} = product;
        const productId = product.id;
        const dollarAmount = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 ">
                <CardContent className="p-4">
                  <div className="relative h-64 md:48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      priority
                      sizes="(max-width:768) 100vw, (max-width:1200) 50vw,33vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground">{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsGrid;

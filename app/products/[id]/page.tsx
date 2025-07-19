import React from "react";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import {singleProduct} from "@/utils/actions";
import Image from "next/image";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRation from "@/components/single-product/ProductRation";
import {formatCurrency} from "@/utils/format";
import AddToCard from "@/components/single-product/AddToCard";

async function SingleProductPage({params}: {params: {id: string}}) {
  const product = await singleProduct(params.id);
  const {name, image, price, company, description} = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={params.id}
            fill
            sizes="(max-width:768) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRation productId={params.id} />
          <h1 className="text-xl mt-2">{company}</h1>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded ">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCard productId={params.id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;

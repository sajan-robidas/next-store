import {fetchAllProducts} from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductList";
import {LuLayoutGrid, LuList} from "react-icons/lu";
import {Button} from "../ui/button";
import Link from "next/link";
import {Separator} from "../ui/separator";

async function ProductContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({search});
  const totalProducts = products.length;
  const searchTeam = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex space-x-4">
            <Button variant={layout === "grid" ? "default" : "ghost"}>
              <Link href={`/products?layout=grid${searchTeam}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button variant={layout === "list" ? "default" : "ghost"}>
              <Link href={`/products?layout=list${searchTeam}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry, no products matched your search.... </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductContainer;

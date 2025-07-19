import ProductContainer from "@/components/products/ProductContainer";

function ProductsPage({
  searchParams,
}: {
  searchParams: {layout?: string; search?: string};
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  console.log(searchParams);
  return <ProductContainer layout={layout} search={search} />;
}

export default ProductsPage;

import LoadingContainer from "@/components/global/LoadingContainer";
import FeatureProducts from "@/components/home/FeatureProducts";
import Hero from "@/components/home/Hero";
import {Suspense} from "react";

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeatureProducts />
      </Suspense>
    </>
  );
}

export default HomePage;

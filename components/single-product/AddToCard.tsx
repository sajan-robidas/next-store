import {Button} from "../ui/button";

function AddToCard({productId}: {productId: string}) {
  console.log(productId);
  return (
    <Button size="lg" className="mt-10 capitalize">
      AddToCard
    </Button>
  );
}

export default AddToCard;

import {FaStar} from "react-icons/fa";

const ProductRation = ({productId}: {productId: string}) => {
  console.log(productId);
  const rating = 4.2;
  const count = 25;
  const className = "flex gap-1 items-center mt-1 text-md mb-4";
  const countValue = `(${count} reviews)`;
  return (
    <span className={className}>
      <FaStar className="h-4 w-4" />
      {rating} {countValue}
    </span>
  );
};

export default ProductRation;

// "use client";
import Link from "next/link";
import {Button} from "../ui/button";
import {LucideShoppingCart} from "lucide-react";

function CartButton() {
  // Temp
  const numItemInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex items-center justify-center relative">
      <Link href="/cart">
        <LucideShoppingCart>
          <span className="absolute -top-3 -right-3 inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-primary rounded-full">
            {numItemInCart}
          </span>
        </LucideShoppingCart>
      </Link>
    </Button>
  );
}

export default CartButton;

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src={"/LogoContainer.png"} alt="Logo" width={84} height={36} />
      </Link>

      <Link href="/cart">
        <Button variant={"secondary"} className="rounded-2xl">
          <ShoppingCart /> {cartCount}
        </Button>
      </Link>
    </div>
  );
};

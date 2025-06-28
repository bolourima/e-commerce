"use client";

import {
  ProductBreadCrumb,
  ProductImage,
  ProductInfo,
  ProductPurchase,
  ProductSkeleton,
} from "@/components/product";
import { useCart } from "@/context/CartContext";
import { useGetProductByIdQuery } from "@/generated";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const [pieces, setPieces] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { data } = useGetProductByIdQuery({
    variables: { productId: id },
  });

  const product = data?.product;

  useEffect(() => {
    if (product) {
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        setIsAdded(true);
        setPieces(existingItem.pieces);
      } else {
        setIsAdded(false);
        setPieces(1);
      }
    }
  }, [cartItems, product]);

  if (!product) {
    return <ProductSkeleton />;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      images: product.images,
      price: product.price,
      pieces,
    });
    setIsAdded(true);
  };

  const handleQuantityChange = (newPieces: number) => {
    setPieces(newPieces);
    if (isAdded) {
      updateQuantity(product.id, newPieces);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsAdded(false);
    setPieces(1);
  };

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center">
      <div className="max-w-[1300px]">
        <ProductBreadCrumb
          categoryName={product.category.name}
          productTitle={product.title}
        />
        <div className="flex gap-5 justify-between w-full">
          <ProductImage
            imageUrl={product.images[0]}
            title={product.title}
            size={478}
          />
          <ProductInfo
            title={product.title}
            description={product.description}
          />
          <ProductPurchase
            price={product.price}
            pieces={pieces}
            isAdded={isAdded}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onGoToCart={handleGoToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

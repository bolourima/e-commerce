"use client";

import { AsideCategories, Products, SearchBar } from "@/components/shop";
import { CartProduct } from "@/lib/types";
import { useEffect, useState } from "react";

const Page = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCartItems(parsed);
      } catch (error) {
        console.error("Error parsing cart items from localStorage:", error);
        localStorage.removeItem("cartItems");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="h-screen">
      <div className="flex w-full justify-center gap-6 p-6 bg-gray-100 h-fit">
        <AsideCategories />
        <div className="w-[70%] flex flex-col gap-6">
          <SearchBar onSearch={handleSearch} />
          <Products searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Page;

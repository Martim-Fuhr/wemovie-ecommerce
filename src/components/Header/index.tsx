"use client";

import { useState, useEffect } from "react";
import { HeaderSection, CartWrapper } from "./styles";
import SVGCart from "@/components/icons/SVGCart";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

const calculateTotalItems = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export function Header() {
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const loadCartItems = () => {
      const savedCartItems = JSON.parse(
        window.localStorage.getItem("cartItems") || "[]"
      );
      setTotalItems(calculateTotalItems(savedCartItems));
    };

    loadCartItems();
    window.addEventListener("storage", loadCartItems);

    return () => {
      window.removeEventListener("storage", loadCartItems);
    };
  }, []);

  return (
    <HeaderSection>
      <div className="align-header">
        <Link href={"/"}>
          <h1>WeMovies</h1>
        </Link>
        <Link href={"/cart"}>
          <CartWrapper>
            <div className="flex flex-col px-2 mobile-item">
              <p className="my-cart">Meu Carrinho</p>
              <span>{totalItems} Itens</span>
            </div>
            <SVGCart />
          </CartWrapper>
        </Link>
      </div>
    </HeaderSection>
  );
}

export default Header;

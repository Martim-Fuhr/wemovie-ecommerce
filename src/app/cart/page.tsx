"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionCartEmpty, SectionCartItems, SectionWrapper } from "./styles";
import SVGCartEmpty from "@/components/icons/SVGCartEmpty";
import SVGDeleteItem from "@/components/icons/SVGDeleteItem";
import GoToHomeButton from "@/components/buttons/GoToHomeButton";
import SVGReduceItem from "@/components/icons/SVGReduceItem";
import SVGIncrementItem from "@/components/icons/SVGIncrementItem";
import Link from "next/link";

export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCartItems = JSON.parse(
      window.localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(savedCartItems);
    setLoading(false);
  }, []);

  function hasCartItem() {
    return cartItems.length > 0;
  }

  function renderEmptyCartLayout() {
    const handleGoHome = () => {
      router.push("/");
    };

    return (
      <SectionCartEmpty>
        <h3>Parece que não há nada por aqui :(</h3>
        <SVGCartEmpty />
        <Link href="/">
          <GoToHomeButton onClick={handleGoHome}>
            Recarregar página
          </GoToHomeButton>
        </Link>
      </SectionCartEmpty>
    );
  }

  function renderCartLayout() {
    const handleGoHome = () => {
      localStorage.clear();
    };

    const handleRemoveItem = (itemId: number) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItems)
      );
    };

    const handleIncrementQuantity = (id: number) => {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
      window.localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    const handleDecrementQuantity = (id: number) => {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
      window.localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    const calculateSubtotal = (item: any) => {
      return item.price * item.quantity;
    };

    const calculateTotal = () => {
      return cartItems.reduce(
        (total, item) => total + calculateSubtotal(item),
        0
      );
    };

    return (
      <SectionCartItems>
        <SectionWrapper>
          <div className="names-control">
            <p className="product name-title">PRODUTO</p>
            <p className="quantity name-title">QTD</p>
            <p className="subtotal name-title">SUBTOTAL</p>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-section">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={91}
                  height={114}
                />
                <div className="name-price">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">R$ {item.price}</p>
                </div>
              </div>

              <div className="quantity quantity-controls">
                <button onClick={() => handleDecrementQuantity(item.id)}>
                  <SVGReduceItem />
                </button>
                <p className="span-controls">{item.quantity}</p>
                <button onClick={() => handleIncrementQuantity(item.id)}>
                  <SVGIncrementItem />
                </button>
              </div>
              <div className="subtotal subtotal-section">
                <p className="subtotal-mobile">SUBTOTAL</p>
                <p>R$ {calculateSubtotal(item).toFixed(2)}</p>
              </div>
              <div className="delete-storage-item">
                <button onClick={() => handleRemoveItem(item.id)}>
                  <SVGDeleteItem />
                </button>
              </div>
            </div>
          ))}
          <div className="footer-section">
            <div className="total">
              <p className="name-title">TOTAL</p>
              <p>R$ {calculateTotal().toFixed(2)}</p>
            </div>
            <Link href="/item-sold">
              <GoToHomeButton onClick={handleGoHome}>
                FINALIZAR PEDIDO
              </GoToHomeButton>
            </Link>
          </div>
        </SectionWrapper>
      </SectionCartItems>
    );
  }

  return (
    <>
      <Header />
      {hasCartItem() ? renderCartLayout() : renderEmptyCartLayout()}
    </>
  );
}

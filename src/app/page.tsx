"use client";
import { useState, useEffect, useReducer } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonAddToCart from "@/components/buttons/AddToCartButton";
import SVGCartButton from "@/components/icons/SVGCartButton";
import { getMovies } from "@/services/getMovies";
import {
  cartReducer,
  initialState,
  CartItem,
  CartAction,
} from "@/services/cartUtil";

import { NavList, CardList, CardItem } from "./styles";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCartItems = JSON.parse(
      window.localStorage.getItem("cartItems") || "[]"
    );
    if (Array.isArray(savedCartItems)) {
      savedCartItems.forEach((item: CartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const handleAddToCart = (item: Movie) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: item.id,
          name: item.title,
          image: item.image,
          price: item.price,
          quantity: 1,
        },
      });
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (err) {
        setError("Falha ao carregar filmes");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center pt-23">
        <div className="block rounded-full w-12 h-12 mx-auto border-4 border-t-4 border-r-4 border-transparent border-t-[#e6e6e6] border-r-[#e6e6e6] animate-spin z-10"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <NavList>
        <CardList>
          {movies.map((item) => (
            <CardItem key={item.id}>
              <Image
                alt="product image"
                height={188}
                width={147}
                src={item.image}
                className="pt-4"
              />
              <p className="item-title">{item.title}</p>
              <p className="item-price">R$ {item.price}</p>
              <ButtonAddToCart
                hasItems={state.cartItems.some(
                  (cartItem) => cartItem.id === item.id
                )}
                onClick={() => handleAddToCart(item)}
              >
                <SVGCartButton />
                <span className="qnt-items">
                  {state.cartItems.filter((cartItem) => cartItem.id === item.id)
                    .length || 0}
                </span>
                {state.cartItems.some((cartItem) => cartItem.id === item.id)
                  ? "REMOVER DO CARRINHO"
                  : "ADICIONAR AO CARRINHO"}
              </ButtonAddToCart>
            </CardItem>
          ))}
        </CardList>
      </NavList>
      <Footer />
    </>
  );
}

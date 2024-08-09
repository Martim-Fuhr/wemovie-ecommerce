"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionItemSold } from "./styles";
import SVGItemSold from "@/components/icons/SVGCartEmpty";
import GoToHomeButton from "@/components/buttons/GoToHomeButton";
import Link from "next/link";

export default function Cart() {
  const router = useRouter();

  return (
    <>
      <Header />
      <SectionItemSold>
        <h3>Compra realizada com sucesso!</h3>
        <SVGItemSold />
        <Link href="/">
          <GoToHomeButton>Voltar</GoToHomeButton>
        </Link>
      </SectionItemSold>
      <Footer />
    </>
  );
}

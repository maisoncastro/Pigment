import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import Head from "next/head";
import ColorThief from "colorthief";

// Components

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CardsSection from "@/components/CardsSection";

export default function Home() {
  const [imageCards, setImageCards] = React.useState<
    Array<{ url: string; palette: string[] }>
  >([]);

  const handleImageUpload = (newImageCard: any) => {
    console.log("New image card:", newImageCard); // Add this line
    setImageCards((prevImageCards) => {
      const updatedImageCards = [...prevImageCards, newImageCard];
      console.log("Updated image cards:", updatedImageCards);
      return updatedImageCards;
    });
  };

  return (
    <>
      <Head>
        <title>Blendedshades</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blendedshades-logo.svg" />
      </Head>
      <Navbar />
      <Header onImageUpload={handleImageUpload} />
      <CardsSection key={imageCards.length} imageCards={imageCards} />
    </>
  );
}

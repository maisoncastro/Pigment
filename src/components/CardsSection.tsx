import React from "react";
import ImageCard from "@/components/ImageCard";

interface CardsSectionProps {
  imageCards: Array<{ url: string; palette: string[] }>;
}

export default function CardsSection({ imageCards }: CardsSectionProps) {
  return (
    <>
      <div className="container-cards">
        <div className="grid-cards">
          {imageCards.map((imageCard, index) => (
            <ImageCard
              key={index}
              url={imageCard.url}
              palette={imageCard.palette}
              onCustomChange={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
}

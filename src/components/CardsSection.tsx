import React, { useEffect } from "react";

interface CardsSectionProps {
  imageCards: Array<{ url: string; palette: string[] }>;
}

export default function CardsSection({ imageCards }: CardsSectionProps) {
  useEffect(() => {
    console.log("CardsSection received imageCards:", imageCards);
  }, [imageCards]);

  return (
    <>
      <div className="container-cards">
        <div className="grid-cards">
          <div>
            <div className="card">
              <div className="card-image">
                <img src="/fox.png" alt="Fox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

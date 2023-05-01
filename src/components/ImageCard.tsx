import React from "react";
import NextImage from "next/image";
import MyColorPicker from "@/components/CustomSquarePicker";

interface ImageCardProps {
  url: string;
  palette: string[];
  onCustomChange: (color: any) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  url,
  palette,
  onCustomChange,
}) => {
  return (
    <div className="image-card">
      <div className="image-card-picture">
        <NextImage
          src={url}
          alt="Card Preview"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <MyColorPicker colors={palette} onCustomChange={onCustomChange} />
    </div>
  );
};

export default ImageCard;

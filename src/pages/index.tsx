import { useState, ChangeEvent } from "react";
import Head from "next/head";
import NextImage from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ColorThief from "colorthief";
import { CirclePicker } from "react-color";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImg(previewUrl);

      const colorThief = new ColorThief();
      const img = new Image();
      img.src = previewUrl;
      img.onload = () => {
        const colorPalette = colorThief.getPalette(img, 5); // Adjust the second parameter to get the desired number of colors
        setPalette(colorPalette.map((color) => `rgb(${color.join(",")})`));
      };
    }
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
      <div className="container-header">
        <div>
          <span>Extract shades from your photos</span>
          <div>
            Crave a color combo that syncs with your top pics?
            BlendedShades&apos; color scheme creator nails it in moments. Just
            add an image, and we&apos;ll craft your palette from its tones.
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="upload-image"
          />
          <label htmlFor="upload-image">
            <button>Upload Image</button>
          </label>
          <button
            onClick={() => document.getElementById("upload-image")?.click()}
          >
            Test Upload Image
          </button>
        </div>
        <div className="picture-div">
          {previewImg && (
            <NextImage
              src={previewImg}
              alt="Preview"
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </div>
      <div className="container-palettes">
        {palette.length > 0 && (
          <CirclePicker
            colors={palette}
            circleSize={32}
            circleSpacing={12}
            width="auto"
          />
        )}
      </div>
    </>
  );
}

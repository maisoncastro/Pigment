import React from "react";
import Link from "next/link";
import NextImage from "next/image";

import blendedshadesLogo from "public/blendedshades.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <NextImage
          src={blendedshadesLogo}
          alt="Preview"
          width={460}
          height={35}
        />
      </Link>
    </nav>
  );
};

export default Navbar;

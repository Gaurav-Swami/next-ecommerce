"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        alt=""
        width={28}
        height={28}
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
        src="/menu.png"
      />
      {
        open && (
          <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col gap-y-8 text-xl z-10 items-center justify-center">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Shop</Link>
            <Link href={'/'}>Details</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>Logout</Link>
            <Link href={'/'}>Cart(1)</Link>

          </div>
        )
      }
    </div>
  );
};

export default Menu;

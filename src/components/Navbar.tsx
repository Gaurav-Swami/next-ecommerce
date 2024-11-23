import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="flex items-center justify-between h-full">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREEN */}

      <div className="hidden md:flex items-center justify-center gap-8 h-full">
        {/* LEFT */}

        <div className="">
          <Link href={"/"}>
          <Image src={'/logo.png'} width={24} height={24} alt=""/>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
        </div>

        {/* RIGHT */}

        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;

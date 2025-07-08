import Image from "next/image";
import { brunoAce } from "@/lib/fonts";
import InstagramIcon from "../icons/InstagramIcon";
import FlickrIcon from "../icons/FlickerIcon";
import TelegramIcon from "../icons/TelegramIcon";
import EmailIcon from "../icons/EmailIcon";
import Logo from "@/assets/logo2.jpg";
import MenuIcon from "../icons/MenuIcon";

export default function Header() {
  return (
    <header className={`flex justify-between items-center px-4 py-4 md:px-10 md:py-2 ${brunoAce.className} antialiased`}>
      <div className="gap-4 hidden md:flex">
        <a href="https://www.instagram.com/macrogoshinski/"><InstagramIcon /></a>
        <a href="https://www.flickr.com/photos/24685723@N05/"><FlickrIcon /></a>
        <a href="https://t.me/Goshinski"><TelegramIcon /></a>
        <a href="mailto:arandoncel@gmail.com"><EmailIcon /></a>
      </div>
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <Image src={Logo} alt="Logo" className="w-15 order-1 md:order-2 md:w-20"/>
        <span className="uppercase font-bold order-2 md:order-1 md:block">Aran Doncel</span>
        <span className="uppercase font-bold md:order-3 hidden md:block">Photography</span>
      </div>
      <div className="flex gap-2 cursor-pointer pl-8">
        <span className="uppercase font-bold hidden md:block">Menu</span>
        <MenuIcon />
      </div>
    </header>
  );
}
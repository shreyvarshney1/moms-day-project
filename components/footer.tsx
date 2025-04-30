import Image from "next/image";
import { FaInstagram, FaHeart, FaComment } from "react-icons/fa";
import placeholder from "@/public/placeholder.svg";
import { cormorant } from "./fonts";

export default function InstagramSection() {
  return (
    <footer className="bg-white">
      <div className="bg-black text-white flex items-center justify-between px-6 py-4 max-w-1/4 me-auto">
        <span className="font-semibold text-lg">Follow me on Instagram</span>
        <FaInstagram className="text-xl" />
      </div>

      <div className="grid grid-cols-7 gap-0 bg-gray-200">
        {Array.from({ length: 7 }).map((_, idx) => (
          <Image
            key={idx}
            src={placeholder}
            height={1000}
            width={1000}
            alt="placeholder"
            className="hover:mix-blend-multiply"
          />
        ))}
      </div>
      <div className="flex text-center py-4 justify-around">
        <div className="flex justify-center items-start flex-col gap-1">
          <h2 className={`text-xl font-semibold ${cormorant.className}`}>
            Mother’s Day Tribute
          </h2>
          <p className="text-gray-500 text-xs">
            Copyrights © 2025. All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-gray-500 text-sm">
          <a href="/">Home</a>
          <a href="/about">About me</a>
          <a href="/categories">Categories</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, X, AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { openSans, cormorant } from "@/components/fonts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const indicatorSpan = (
    <span className="inline-block w-10 h-0.5 bg-white mr-4"></span>
  );
  return (
    <header className={cormorant.className}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-12">
          <button
            aria-label="Close menu"
            className="p-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <AlignJustify className="h-6 w-6 text-foreground" />
          </button>
          <div className="text-center text-xl font-medium">
            Mother’s Day Tribute Blog
          </div>
          <button aria-label="Search" className="p-1">
            <Search className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 text-white z-50 overflow-y-auto ">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-12">
              <button
                aria-label="Close menu"
                className="p-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center text-xl font-medium">
                Mother’s Day Tribute Blog
              </div>
              <button aria-label="Search" className="p-1">
                <Search className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] w-3/4 mx-auto">
              <nav className="flex-1">
                <ul className="space-y-8 text-white/30 text-5xl font-normal">
                  <li>
                    <Link
                      href="/"
                      className={cn(
                        "hover:text-gray-300 flex items-center",
                        currentPath === "/" ? "text-white" : ""
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {currentPath === "/" && indicatorSpan}
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={cn(
                        "hover:text-gray-300 flex items-center",
                        currentPath === "/about" ? "text-white" : ""
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {currentPath === "/about" && indicatorSpan}
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className={cn(
                        "hover:text-gray-300 flex items-center",
                        currentPath === "/categories" ? "text-white" : ""
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {currentPath === "/categories" && indicatorSpan}
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={cn(
                        "hover:text-gray-300 flex items-center",
                        currentPath === "/contact" ? "text-white" : ""
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {currentPath === "/contact" && indicatorSpan}
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex-1">
                <div className="border border-white p-18 text-sm">
                  <h3 className="text-2xl">Newsletter</h3>
                  <p className={`mb-6 text-gray-300/50 font-extralight ${openSans.className}`}>
                    Subscribe to receive daily updates!
                  </p>
                  <div className={`mb-4 ${openSans.className}`}>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@email.com"
                      className="w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <button className="w-full bg-white text-black py-2 px-4 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

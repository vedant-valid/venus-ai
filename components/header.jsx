"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, User, Code, Globe, Globe2 } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import GlassSurface from "./GlassSurface";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 p-0 m-0`}>
      <div className="relative w-full flex justify-center">
        <GlassSurface
          width="100%"
          // height="100%"
          borderRadius={16}
        >
          <div
            className={`transition-all duration-700 ease-in-out transform-gpu ${
              scrolled
                ? "w-full scale-x-100 rounded-none"
                : "w-full max-w-5xl scale-x-100 rounded-2xl mt-0"
            }`}
            style={{
              transformOrigin: "center",
              ...(scrolled
                ? {
                    borderRadius: "0px",
                    maxWidth: "100%",
                    marginLeft: "-1rem",
                    marginRight: "-1rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }
                : {}),
            }}
          >
            <div className="">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    <Globe2 />
                    <span>Venus</span>
                  </Link>
                </div>

                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-8">
                      <SignedOut>
                        <a
                          href="#features"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Features
                        </a>
                        <a
                          href="#testimonials"
                          className="text-gray-700 hover:text-blue-600"
                        >
                          Testimonials
                        </a>
                      </SignedOut>
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                      <SignedIn>
                        <Link href="/dashboard">
                          <Button
                            variant="outline"
                            className="flex items-center gap-2"
                          >
                            <LayoutDashboard size={18} />
                            <span className="hidden md:inline">Dashboard</span>
                          </Button>
                        </Link>
                        <Link href="/transaction/create">
                          <Button className="flex items-center gap-2">
                            <PenBox size={18} />
                            <span className="hidden md:inline">
                              Add Transaction
                            </span>
                          </Button>
                        </Link>
                      </SignedIn>

                      <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                          <Button variant="outline">Login</Button>
                        </SignInButton>
                      </SignedOut>

                      <SignedIn>
                        <UserButton
                          appearance={{
                            elements: { avatarBox: "w-10 h-10" },
                          }}
                        />
                      </SignedIn>
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"></button>
                </div>
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </nav>
  );
};

export default Header;

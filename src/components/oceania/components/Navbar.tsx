"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OceaniaNavbarProps } from "@/types/template";
import { Logo } from "./Logo";

export function Navbar({ content }: { content?: OceaniaNavbarProps }) {
    if (!content) return null;
    const { logoText, menuItems, ctaText, ctaLink } = content;
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };
        window.addEventListener("hashchange", handleHashChange);
        handleHashChange();
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center">
                        <Link href="#home" className="flex items-center gap-4 group">
                            <Logo className="h-9 w-auto text-white group-hover:text-[#4DA1E8] transition-colors" />
                            <span
                                className="text-xl font-bold tracking-[0.2em] text-white font-playfair group-hover:text-[#4DA1E8] transition-colors"
                                data-studio-path="navbar.logoText"
                            >
                                {logoText}
                            </span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-12">
                        {menuItems.map((item, index) => {
                            const isActive = activeHash === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-[11px] font-medium tracking-[0.15em] transition-all uppercase ${isActive ? "text-[#4DA1E8]" : "text-white/70 hover:text-white"
                                        }`}
                                    data-studio-path={`navbar.menuItems.${index}.label`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            href={ctaLink}
                            className="bg-[#005A9C] text-white text-[11px] font-bold tracking-[0.15em] px-8 py-3.5 hover:bg-[#4DA1E8] transition-all shadow-lg"
                            data-studio-path="navbar.ctaText"
                        >
                            {ctaText}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button className="text-white hover:text-[#4DA1E8] p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

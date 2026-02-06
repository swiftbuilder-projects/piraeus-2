"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OceaniaNavbarProps } from "@/types/template";
import { Logo } from "./Logo";
import { X } from "lucide-react";

export function Navbar({ content }: { content?: OceaniaNavbarProps }) {
    if (!content) return null;
    const { logoText, menuItems, ctaText, ctaLink } = content;
    const [activeHash, setActiveHash] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };
        window.addEventListener("hashchange", handleHashChange);
        handleHashChange();
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Close mobile menu when clicking a link
    const handleMobileMenuClick = () => {
        setMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
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
                            <button 
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-white hover:text-[#4DA1E8] p-2 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" strokeWidth={1.5} />
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-md"
                    onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <div
                    className={`absolute top-24 right-0 bottom-0 w-full max-w-sm bg-black/80 backdrop-blur-2xl border-l border-white/20 shadow-2xl transform transition-transform duration-300 ${
                        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full p-8">
                        <div className="flex flex-col space-y-8 mb-12">
                            {menuItems.map((item, index) => {
                                const isActive = activeHash === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={handleMobileMenuClick}
                                        className={`text-lg font-medium tracking-wider transition-all uppercase ${
                                            isActive ? "text-[#4DA1E8]" : "text-white/90 hover:text-white"
                                        }`}
                                        data-studio-path={`navbar.menuItems.${index}.label`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <Link
                            href={ctaLink}
                            onClick={handleMobileMenuClick}
                            className="bg-[#005A9C]/90 backdrop-blur-sm text-white text-sm font-bold tracking-wider px-8 py-4 hover:bg-[#4DA1E8] transition-all shadow-lg text-center uppercase border border-white/10"
                            data-studio-path="navbar.ctaText"
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

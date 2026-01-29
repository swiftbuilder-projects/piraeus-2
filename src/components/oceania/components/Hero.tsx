"use client";

import React from "react";
import { OceaniaHeroProps } from "@/types/template";

export function Hero({ content }: { content?: OceaniaHeroProps }) {
    if (!content) return null;

    const {
        badgeText, title, highlightedText, description,
        primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink,
        backgroundImage
    } = content;

    return (
        <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#0A1118]">
            {/* Background Image - High Visibility with Bottom Fade */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="Strategic Leadership"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-80 contrast-110"
                    data-studio-path="hero.backgroundImage"
                />

                {/* Optimized Overlays - Darker at bottom, clear in middle */}
                <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#0A1118]/90 via-[#0A1118]/40 to-transparent p-4" />

                {/* Concentrated bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-[#0A1118]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-24 md:pb-32">
                <div className="max-w-5xl">
                    <div className="inline-flex items-center gap-4 mb-8 overflow-hidden">
                        <div className="w-12 h-[1.5px] bg-[#4DA1E8]" />
                        <span
                            className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-[#4DA1E8] uppercase whitespace-nowrap"
                            data-studio-path="hero.badgeText"
                        >
                            {badgeText}
                        </span>
                    </div>

                    {/* Significantly Reduced Title Font Size with Enhanced Shadowing */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-playfair italic leading-[1.2] text-white mb-8 tracking-tight max-w-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
                        <span data-studio-path="hero.title" className="inline">{title}</span>{" "}
                        <span
                            className="text-[#4DA1E8] inline"
                            data-studio-path="hero.highlightedText"
                        >
                            {highlightedText}
                        </span>
                    </h1>

                    <div className="max-w-3xl">
                        <p
                            className="text-lg md:text-xl text-white leading-relaxed font-light font-inter drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
                            data-studio-path="hero.description"
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Edge Glow */}
            <div className="absolute -right-[10%] top-1/4 w-[40%] h-[50%] bg-[#4DA1E8]/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity hidden md:flex">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] tracking-[0.4em] font-bold text-white uppercase italic transform -rotate-90 origin-left ml-2">Scroll</span>
            </div>
        </section>
    );
}

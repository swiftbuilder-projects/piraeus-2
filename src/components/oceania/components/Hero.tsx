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
        <section className="bg-[#0A1118] overflow-hidden">
            {/* Hero Image Section - High Impact & Crispy */}
            <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
                <img
                    src={backgroundImage}
                    alt="Strategic Leadership"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01] contrast-[1.12] brightness-[1.05]"
                    data-studio-path="hero.backgroundImage"
                />
                
                {/* Refined Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A1118]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Edge Lighting */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.03)]" />
            </div>

            {/* Content Section - Professional & Balanced */}
            <div className="relative z-10 bg-[#0A1118] pt-16 pb-24 md:pt-20 md:pb-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="w-full">
                        {/* Elegant Badge Design */}
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-[1px] bg-[#4DA1E8]/60" />
                            <span
                                className="text-[10px] font-bold tracking-[0.6em] text-[#4DA1E8] uppercase whitespace-nowrap"
                                data-studio-path="hero.badgeText"
                            >
                                {badgeText}
                            </span>
                        </div>

                        {/* Refined Title Typography */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic leading-[1.15] text-white mb-10 tracking-tight">
                            <span data-studio-path="hero.title" className="block md:inline">{title}</span>
                            <span
                                className="text-[#59ACF2] block md:inline md:ml-3"
                                data-studio-path="hero.highlightedText"
                            >
                                {highlightedText}
                            </span>
                        </h1>

                        {/* Professional Description Block */}
                        <div className="w-full border-l border-[#4DA1E8]/20 pl-8 ml-1">
                            <p
                                className="text-lg md:text-xl text-white/80 leading-[1.8] font-light font-inter"
                                data-studio-path="hero.description"
                            >
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Subtle depth glow */}
                <div className="absolute -right-[5%] bottom-0 w-[30%] h-[40%] bg-[#4DA1E8]/5 blur-[100px] rounded-full pointer-events-none" />
            </div>
        </section>
    );
}

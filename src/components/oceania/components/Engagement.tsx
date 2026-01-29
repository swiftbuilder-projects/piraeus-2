"use client";

import React from "react";
import { OceaniaEngagementProps } from "@/types/template";

export function Engagement({ content }: { content?: OceaniaEngagementProps }) {
    if (!content) return null;
    const { badgeText, title, description, counties, parliament } = content;

    return (
        <section id="engagement" className="py-40 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center mb-32">
                <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-[#005A9C]" />
                    <span
                        className="text-[11px] font-bold tracking-[0.4em] text-[#005A9C] uppercase"
                        data-studio-path="engagement.badgeText"
                    >
                        {badgeText}
                    </span>
                </div>
                <h2
                    className="text-4xl md:text-6xl font-playfair italic leading-tight text-[#111111] mb-10"
                    data-studio-path="engagement.title"
                >
                    {title}
                </h2>
                <p
                    className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto font-inter"
                    data-studio-path="engagement.description"
                >
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* County Governments */}
                <div
                    className="relative h-[600px] md:h-[800px] overflow-hidden group"
                    data-studio-path="engagement.counties"
                >
                    <img
                        src={counties.image}
                        alt={counties.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-studio-path="engagement.counties.image"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-12 md:p-20 text-white max-w-2xl">
                        <h3
                            className="text-4xl md:text-5xl font-playfair italic mb-8"
                            data-studio-path="engagement.counties.title"
                        >
                            {counties.title}
                        </h3>
                        <p
                            className="text-lg text-white/70 font-inter font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0"
                            data-studio-path="engagement.counties.content"
                        >
                            {counties.content}
                        </p>
                        <div className="w-20 h-[1px] bg-[#D69E66]" />
                    </div>
                </div>

                {/* Parliament */}
                <div
                    className="relative h-[600px] md:h-[800px] overflow-hidden group border-l border-white/10"
                    data-studio-path="engagement.parliament"
                >
                    <img
                        src={parliament.image}
                        alt={parliament.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                        data-studio-path="engagement.parliament.image"
                    />
                    <div className="absolute inset-0 bg-[#005A9C]/80 group-hover:bg-[#005A9C]/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-12 md:p-20 text-white max-w-2xl">
                        <h3
                            className="text-4xl md:text-5xl font-playfair italic mb-8"
                            data-studio-path="engagement.parliament.title"
                        >
                            {parliament.title}
                        </h3>
                        <p
                            className="text-lg text-white/70 font-inter font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0"
                            data-studio-path="engagement.parliament.content"
                        >
                            {parliament.content}
                        </p>
                        <div className="w-20 h-[1px] bg-[#4DA1E8]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { OceaniaAboutProps } from "@/types/template";

export function About({ content }: { content?: OceaniaAboutProps }) {
    if (!content) return null;
    const { badgeText, title, description, mission, vision, values, purposeTitle, purposeDescription } = content;

    return (
        <section id="about" className="py-40 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
                        {/* Left Side: Badge & Large Heading */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-4 mb-10">
                                <div className="w-8 h-[1px] bg-[#005A9C]" />
                                <span
                                    className="text-[11px] font-bold tracking-[0.3em] text-[#005A9C] uppercase"
                                    data-studio-path="about.badgeText"
                                >
                                    {badgeText}
                                </span>
                            </div>
                            <h2
                                className="text-4xl md:text-6xl lg:text-7xl font-playfair italic leading-tight text-[#111111] mb-12"
                                data-studio-path="about.title"
                            >
                                {title}
                            </h2>
                            <p
                                className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed font-inter max-w-2xl"
                                data-studio-path="about.description"
                            >
                                {description}
                            </p>
                        </div>

                        {/* Right Side: Purpose Block */}
                        <div className="lg:col-span-5 pt-10 lg:pt-20">
                            <div className="relative p-10 md:p-16 bg-[#f8f9fa] border-l-8 border-[#005A9C]">
                                <h3
                                    className="text-xs font-bold tracking-[0.2em] text-[#005A9C] mb-8 uppercase"
                                    data-studio-path="about.purposeTitle"
                                >
                                    {purposeTitle}
                                </h3>
                                <p
                                    className="text-gray-600 text-lg leading-relaxed font-inter italic border-l-2 border-[#D69E66] pl-6"
                                    data-studio-path="about.purposeDescription"
                                >
                                    "{purposeDescription}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision & Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-100 pt-40">
                        <div className="space-y-8">
                            <h3 className="text-[11px] font-bold tracking-[0.4em] text-[#D69E66] uppercase">OUR MISSION</h3>
                            <p
                                className="text-2xl font-playfair italic text-[#111111] leading-relaxed"
                                data-studio-path="about.mission"
                            >
                                {mission}
                            </p>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-[11px] font-bold tracking-[0.4em] text-[#D69E66] uppercase">OUR VISION</h3>
                            <p
                                className="text-2xl font-playfair italic text-[#111111] leading-relaxed"
                                data-studio-path="about.vision"
                            >
                                {vision}
                            </p>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-[11px] font-bold tracking-[0.4em] text-[#D69E66] uppercase">OUR VALUES</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {values?.map((val, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#005A9C]" />
                                        <span className="text-xs font-bold tracking-[0.1em] text-gray-600 uppercase" data-studio-path={`about.values.${idx}`}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { OceaniaLeadershipProps } from "@/types/template";
import { ArrowUpRight, Quote } from "lucide-react";

export function Leadership({ content }: { content?: OceaniaLeadershipProps }) {
    if (!content) return null;
    const { name, role, bio, image, message } = content;

    return (
        <section id="leadership" className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        {/* Profile Image Area */}
                        <div className="lg:col-span-4 relative group">
                            <div className="absolute inset-0 bg-[#D69E66] translate-x-12 translate-y-12 -z-10 opacity-10" />
                            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                    data-studio-path="leadership.image"
                                />
                            </div>
                        </div>

                        {/* Profile Info Area */}
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-4 mb-10">
                                <div className="w-8 h-[1px] bg-[#005A9C]" />
                                <span className="text-[11px] font-bold tracking-[0.3em] text-[#005A9C] uppercase">LEADERSHIP MESSAGE</span>
                            </div>

                            {message && (
                                <div className="mb-20 relative">
                                    <Quote className="absolute -top-10 -left-10 w-20 h-20 text-gray-50 opacity-10 -z-10" />
                                    <h2
                                        className="text-3xl md:text-5xl font-playfair italic leading-relaxed text-[#111111]"
                                        data-studio-path="leadership.message"
                                    >
                                        "{message}"
                                    </h2>
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                                <div className="flex-1">
                                    <h3
                                        className="text-3xl font-playfair italic text-[#111111] mb-2"
                                        data-studio-path="leadership.name"
                                    >
                                        {name}
                                    </h3>
                                    <p
                                        className="text-[10px] font-bold tracking-[0.4em] text-[#D69E66] uppercase mb-8"
                                        data-studio-path="leadership.role"
                                    >
                                        {role}
                                    </p>
                                    <p
                                        className="text-lg text-gray-500 font-inter font-light leading-relaxed mb-8"
                                        data-studio-path="leadership.bio"
                                    >
                                        {bio}
                                    </p>
                                </div>
                                <button className="inline-flex items-center gap-4 group flex-shrink-0">
                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase border-b border-black pb-2 group-hover:border-[#D69E66] group-hover:text-[#D69E66] transition-all">VIEW PROFILE</span>
                                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

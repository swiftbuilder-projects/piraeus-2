"use client";

import React from "react";
import { OceaniaServicesProps } from "@/types/template";

export function Services({ content }: { content?: OceaniaServicesProps }) {
    if (!content) return null;
    const { services } = content;

    return (
        <section id="services" className="bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="group relative h-[450px] md:h-[600px] overflow-hidden flex items-end cursor-pointer"
                        data-studio-path={`services.services.${index}`}
                    >
                        {/* Background Image */}
                        {service.image && (
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                                data-studio-path={`services.services.${index}.image`}
                            />
                        )}

                        {/* Base Gradient Overlay: Subtler default state */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />

                        {/* HOVER STATE: Smooth Dark Gradient (No Solid Block) */}
                        <div
                            className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 35%, transparent 100%)' }}
                        />

                        {/* Title Overlay at Bottom */}
                        <div className="relative z-10 p-12 lg:p-16 w-full transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <h3
                                className="text-xl md:text-2xl lg:text-3xl font-inter font-bold tracking-[0.15em] text-white uppercase leading-tight"
                                data-studio-path={`services.services.${index}.title`}
                            >
                                {service.title}
                            </h3>

                            {/* Decorative Line - Aligned Left */}
                            <div className="w-16 h-[2px] bg-[#4DA1E8] mt-6 opacity-60 group-hover:opacity-100 transition-all duration-500 scale-x-75 group-hover:scale-x-100 origin-left" />

                            <p className="mt-6 text-sm text-white/70 font-inter font-light max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2">
                                {service.description}
                            </p>
                        </div>

                        {/* Border Accents */}
                        <div className="absolute inset-0 border border-white/5 group-hover:border-[#4DA1E8]/30 transition-colors pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
}

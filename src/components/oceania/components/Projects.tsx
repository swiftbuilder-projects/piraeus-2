"use client";

import React from "react";
import { OceaniaProjectsProps } from "@/types/template";
import { ArrowRight } from "lucide-react";

export function Projects({ content }: { content?: OceaniaProjectsProps }) {
    if (!content) return null;
    const { badgeText, title, description, caseStudies } = content;

    return (
        <section id="projects" className="py-40 bg-black text-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mb-32">
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-8 h-[1px] bg-[#4DA1E8]" />
                        <span
                            className="text-[11px] font-bold tracking-[0.4em] text-[#4DA1E8] uppercase"
                            data-studio-path="projects.badgeText"
                        >
                            {badgeText}
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-playfair italic leading-tight mb-10"
                        data-studio-path="projects.title"
                    >
                        {title}
                    </h2>
                    <p
                        className="text-xl text-white/50 font-light leading-relaxed font-inter"
                        data-studio-path="projects.description"
                    >
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {caseStudies.map((study, index) => {
                        const variants = [
                            { front: "#0A1A2F", back: "#001A33", nebula: "rgba(77, 161, 232, 0.15)" }, // Deep Blue
                            { front: "#1B1E24", back: "#0E1116", nebula: "rgba(255, 255, 255, 0.05)" }  // Architectural Grey
                        ];

                        // Alternating logic: Row 1 (B, G), Row 2 (G, B)
                        const colorIndex = (Math.floor(index / 2) + index) % 2;
                        const colors = variants[colorIndex];

                        return (
                            <div
                                key={study.id}
                                className="group h-[500px] [perspective:1500px]"
                                data-studio-path={`projects.caseStudies.${index}`}
                            >
                                <div className="relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front Face */}
                                    <div
                                        className="absolute inset-0 flex flex-col justify-between p-12 md:p-16 border border-white/5 overflow-hidden [backface-visibility:hidden]"
                                        style={{ backgroundColor: colors.front }}
                                    >
                                        {/* Nebula Effect Layer */}
                                        <div
                                            className="absolute inset-0 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-60"
                                            style={{
                                                background: `
                                                    radial-gradient(circle at 80% 20%, ${colors.nebula} 0%, transparent 40%),
                                                    radial-gradient(circle at 20% 80%, ${colors.nebula} 0%, transparent 40%),
                                                    radial-gradient(circle at 50% 50%, ${colors.nebula} 0%, transparent 60%)
                                                `
                                            }}
                                        />

                                        {/* Subtle Ambient Light Effect */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-[#4DA1E8]/10 transition-colors duration-700" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-12">
                                                <span className="text-[10px] font-bold tracking-[0.4em] text-[#D69E66] uppercase">
                                                    CASE STUDY 0{index + 1}
                                                </span>
                                                <div className="flex-1 h-[1px] bg-white/5" />
                                            </div>

                                            <h3
                                                className="text-3xl md:text-4xl font-playfair italic leading-[1.3] text-white mb-8"
                                                data-studio-path={`projects.caseStudies.${index}.title`}
                                            >
                                                {study.title}
                                            </h3>

                                            <div className="flex gap-4 items-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#4DA1E8]" />
                                                <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">Client: {study.client}</p>
                                            </div>
                                        </div>

                                        <div className="relative z-10 pt-8 border-t border-white/5 flex items-center justify-between group-hover:text-white transition-all">
                                            <span className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">Explore Impact</span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4DA1E8] group-hover:bg-[#4DA1E8] transition-all duration-500">
                                                <ArrowRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div
                                        className="absolute inset-0 h-full w-full p-12 md:p-16 border border-[#4DA1E8]/20 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                                        style={{ backgroundColor: colors.back }}
                                    >
                                        {/* High Tech Grid Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4DA1E8_1px,transparent_1px),linear-gradient(to_bottom,#4DA1E8_1px,transparent_1px)] bg-[size:30px_30px]" />

                                        <div className="relative z-10 h-full flex flex-col justify-center gap-8">
                                            <div>
                                                <span className="text-[#4DA1E8] font-bold block mb-3 uppercase text-[10px] tracking-[0.3em]">Objective</span>
                                                <p
                                                    className="text-lg text-white font-inter font-light leading-relaxed"
                                                    data-studio-path={`projects.caseStudies.${index}.objective`}
                                                >
                                                    {study.objective}
                                                </p>
                                            </div>

                                            <div className="w-12 h-[1px] bg-white/10" />

                                            <div>
                                                <span className="text-[#4DA1E8] font-bold block mb-3 uppercase text-[10px] tracking-[0.3em]">Outcome</span>
                                                <p
                                                    className="text-lg text-white/80 font-inter font-light leading-relaxed"
                                                    data-studio-path={`projects.caseStudies.${index}.outcome`}
                                                >
                                                    {study.outcome}
                                                </p>
                                            </div>

                                            <div className="w-12 h-[1px] bg-white/10" />

                                            <div>
                                                <span className="text-[#4DA1E8] font-bold block mb-3 uppercase text-[10px] tracking-[0.3em]">Impact</span>
                                                <p
                                                    className="text-lg text-white/60 font-inter font-light leading-relaxed italic"
                                                    data-studio-path={`projects.caseStudies.${index}.impact`}
                                                >
                                                    {study.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { OceaniaCareersProps } from "@/types/template";
import { Briefcase, Heart, Rocket, Users } from "lucide-react";

const icons = [Briefcase, Rocket, Users, Heart];

export function Careers({ content }: { content?: OceaniaCareersProps }) {
    if (!content) return null;
    const { badgeText, title, description, positions, benefits } = content;

    return (
        <section id="careers" className="py-40 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
                    <div>
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-8 h-[1px] bg-[#005A9C]" />
                            <span
                                className="text-[11px] font-bold tracking-[0.3em] text-[#005A9C] uppercase"
                                data-studio-path="careers.badgeText"
                            >
                                {badgeText}
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-6xl font-playfair italic leading-tight text-[#111111] mb-10"
                            data-studio-path="careers.title"
                        >
                            {title}
                        </h2>
                    </div>
                    <div>
                        <p
                            className="text-xl text-gray-500 font-light leading-relaxed font-inter mb-12"
                            data-studio-path="careers.description"
                        >
                            {description}
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div key={index} className="flex flex-col gap-4">
                                        <Icon className="w-6 h-6 text-[#D69E66]" strokeWidth={1.5} />
                                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111]">{benefit}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border-y border-gray-100 divide-y divide-gray-100">
                    {positions.map((pos, index) => (
                        <div
                            key={index}
                            className="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#f8f9fa] transition-all px-6 md:px-12 -mx-6 md:-mx-12"
                            data-studio-path={`careers.positions.${index}`}
                        >
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-2xl font-playfair italic text-[#111111] group-hover:text-[#005A9C] transition-colors mb-2">
                                    {pos}
                                </h3>
                                <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Remote / Hybrid • Nairobi, Kenya</p>
                            </div>
                            <button className="text-[11px] font-bold tracking-[0.2em] uppercase border border-gray-200 px-10 py-4 hover:bg-black hover:text-white transition-all">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-32 p-16 bg-[#005A9C] text-white text-center">
                    <h3 className="text-3xl font-playfair italic mb-8">Don't see a role for you?</h3>
                    <p className="text-white/70 font-inter font-light max-w-xl mx-auto mb-10">
                        We are always interested in meeting exceptional talent. Send your details to our recruitment team.
                    </p>
                    <a href="mailto:careers@piraeusgroup.co.ke" className="text-xs font-bold tracking-[0.3em] uppercase border-b border-white pb-2 hover:text-[#D69E66] hover:border-[#D69E66] transition-all">
                        SEND SPECULATIVE INQUIRY
                    </a>
                </div>
            </div>
        </section>
    );
}

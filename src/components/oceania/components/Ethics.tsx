"use client";

import React from "react";
import { OceaniaEthicsProps } from "@/types/template";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export function Ethics({ content }: { content?: OceaniaEthicsProps }) {
    if (!content) return null;
    const { confidentialityTitle, confidentialityContent, ethicsTitle, ethicsContent } = content;

    return (
        <section id="ethics" className="py-40 bg-black text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff88_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Confidentiality */}
                        <div className="group">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D69E66] group-hover:border-[#D69E66] group-hover:bg-[#D69E66] group-hover:text-white transition-all duration-500">
                                    <Lock className="w-6 h-6" strokeWidth={1} />
                                </div>
                                <h3
                                    className="text-2xl md:text-3xl font-playfair italic"
                                    data-studio-path="ethics.confidentialityTitle"
                                >
                                    {confidentialityTitle}
                                </h3>
                            </div>
                            <div className="pl-22">
                                <p
                                    className="text-xl text-white/50 font-inter font-light leading-relaxed max-w-xl"
                                    data-studio-path="ethics.confidentialityContent"
                                >
                                    {confidentialityContent}
                                </p>
                            </div>
                        </div>

                        {/* Ethics & Compliance */}
                        <div className="group">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#4DA1E8] group-hover:border-[#4DA1E8] group-hover:bg-[#4DA1E8] group-hover:text-white transition-all duration-500">
                                    <ShieldCheck className="w-6 h-6" strokeWidth={1} />
                                </div>
                                <h3
                                    className="text-2xl md:text-3xl font-playfair italic"
                                    data-studio-path="ethics.ethicsTitle"
                                >
                                    {ethicsTitle}
                                </h3>
                            </div>
                            <div className="pl-22">
                                <p
                                    className="text-xl text-white/50 font-inter font-light leading-relaxed max-w-xl"
                                    data-studio-path="ethics.ethicsContent"
                                >
                                    {ethicsContent}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 sm:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {['CONSTITUTIONAL COMPLIANCE', 'ETHICAL ADVOCACY', 'TRANSPARENT LOBBYING'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#D69E66]" />
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

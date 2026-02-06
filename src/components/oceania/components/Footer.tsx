"use client";

import React from "react";
import Link from "next/link";
import { OceaniaFooterProps } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

const SocialIcon = ({ platform, className }: { platform: string; className?: string }) => {
    switch (platform.toLowerCase()) {
        case "linkedin": return <Linkedin className={className} strokeWidth={1} />;
        case "twitter": return <Twitter className={className} strokeWidth={1} />;
        default: return null;
    }
};

export function Footer({ content }: { content?: OceaniaFooterProps }) {
    if (!content) return null;
    const { logoText, description, contactInfo, links, socialLinks, copyrightText } = content;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="bg-[#111111] pt-32 pb-16 text-white font-inter">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32 border-b border-white/5">
                    {/* Brand Section */}
                    <div className="lg:col-span-12 mb-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-[1px] bg-[#4DA1E8]" />
                            <span
                                className="text-xs font-semibold tracking-[0.2em] text-[#4DA1E8] uppercase"
                                data-studio-path="footer.logoText"
                            >
                                {logoText}
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <p
                            className="text-white/90 text-lg font-light leading-relaxed max-w-sm mb-12"
                            data-studio-path="footer.description"
                        >
                            {description}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#4DA1E8] hover:bg-[#4DA1E8]/10 transition-all duration-300"
                                    data-studio-path={`footer.socialLinks.${index}`}
                                >
                                    <SocialIcon platform={social.platform} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links & Contact */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {links.map((section, sIndex) => (
                            <div key={sIndex}>
                                <h4 className="text-xs font-bold tracking-wider text-[#4DA1E8] mb-8 uppercase">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.items.map((item, iIndex) => (
                                        <li key={iIndex}>
                                            <a
                                                href={item.href}
                                                className="text-sm text-white hover:text-[#4DA1E8] transition-colors"
                                                data-studio-path={`footer.links.${sIndex}.items.${iIndex}.label`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="lg:col-span-1">
                            <h4 className="text-xs font-bold tracking-wider text-[#4DA1E8] mb-8 uppercase">
                                CONTACT
                            </h4>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#4DA1E8]/50 transition-colors">
                                        <Phone className="w-4 h-4 text-[#4DA1E8]" />
                                    </div>
                                    <span className="text-sm font-medium text-white" data-studio-path="footer.contactInfo.phone">{contactInfo.phone}</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#4DA1E8]/50 transition-colors">
                                        <Mail className="w-4 h-4 text-[#4DA1E8]" />
                                    </div>
                                    <span className="text-sm font-medium text-white" data-studio-path="footer.contactInfo.email">{contactInfo.email}</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#4DA1E8]/50 transition-colors">
                                        <MapPin className="w-4 h-4 text-[#4DA1E8]" />
                                    </div>
                                    <span className="text-sm font-medium text-white" data-studio-path="footer.contactInfo.address">{contactInfo.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-white">
                    <p data-studio-path="footer.copyrightText" className="text-sm font-medium">
                        © 2017 {logoText}. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-5 hover:text-[#4DA1E8] transition-all group"
                    >
                        <span className="text-sm font-bold uppercase">BACK TO TOP</span>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-y-1 group-hover:border-[#4DA1E8] transition-all">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}

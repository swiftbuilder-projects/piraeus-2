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
        <footer id="contact" className="bg-[#fbfbfb] border-t border-gray-100 pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32">
                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <Link href="#home" className="flex items-center gap-4 group mb-10">
                            <Logo className="h-9 w-auto text-[#005A9C]" />
                            <h2
                                className="text-2xl font-bold tracking-[0.3em] text-[#005A9C] font-playfair uppercase"
                                data-studio-path="footer.logoText"
                            >
                                {logoText}
                            </h2>
                        </Link>
                        <p
                            className="text-gray-500 text-lg font-inter font-light leading-relaxed max-w-sm mb-12"
                            data-studio-path="footer.description"
                        >
                            {description}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#005A9C] hover:border-[#005A9C] transition-all duration-300"
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
                                <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#111111] mb-10 uppercase">
                                    {section.title}
                                </h4>
                                <ul className="space-y-6">
                                    {section.items.map((item, iIndex) => (
                                        <li key={iIndex}>
                                            <a
                                                href={item.href}
                                                className="text-gray-500 hover:text-[#D69E66] transition-colors text-xs font-bold tracking-[0.1em]"
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
                            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#111111] mb-10 uppercase">
                                GET IN TOUCH
                            </h4>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4 group">
                                    <Phone className="w-5 h-5 text-[#D69E66] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-500 text-xs font-bold tracking-[0.1em]" data-studio-path="footer.contactInfo.phone">{contactInfo.phone}</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <Mail className="w-5 h-5 text-[#D69E66] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-500 text-xs font-bold tracking-[0.1em]" data-studio-path="footer.contactInfo.email">{contactInfo.email}</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <MapPin className="w-5 h-5 text-[#D69E66] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-500 text-xs font-bold tracking-[0.1em]" data-studio-path="footer.contactInfo.address">{contactInfo.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase" data-studio-path="footer.copyrightText">
                        {copyrightText}
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-4 text-gray-400 hover:text-black transition-all group"
                    >
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Back to Top</span>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:-translate-y-2 transition-transform">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Engagement } from "./components/Engagement";
import { Ethics } from "./components/Ethics";
import { Leadership } from "./components/Leadership";
import { Projects } from "./components/Projects";
import { Careers } from "./components/Careers";
import { Footer } from "./components/Footer";
import { OceaniaTemplateContent } from "@/types/template";
import { oceaniaDefaultContent } from "./data";

export default function OceaniaTemplate({
    content,
}: {
    content?: OceaniaTemplateContent;
}) {
    const data = content || oceaniaDefaultContent;

    return (
        <div className="min-h-screen bg-white font-inter selection:bg-[#4DA1E8] selection:text-white">
            <Navbar content={data.navbar} />
            <main>
                <Hero content={data.hero} />
                <About content={data.about} />
                <Services content={data.services} />
                <Projects content={data.projects} />
                <Leadership content={data.leadership} />
            </main>
            <Footer content={data.footer} />
        </div>
    );
}

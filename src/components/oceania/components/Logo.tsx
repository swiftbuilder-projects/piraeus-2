import React from "react";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Architectural 'P' - Solid, Premium, Trustworthy */}

            {/* The Main Pillar - Strength */}
            <rect x="20" y="15" width="20" height="70" fill="currentColor" />

            {/* The Top Arch - Protection & Scope */}
            <path
                d="M45 15 H70 C85 15 85 45 70 45 H45 V15Z"
                fill="currentColor"
                fillOpacity="0.9"
            />

            {/* The Strategic Accent - Forward Motion (Diagonal Cut) */}
            <path
                d="M45 50 H60 L45 65 V50Z"
                fill="currentColor"
                fillOpacity="0.5"
            />
        </svg>
    );
}

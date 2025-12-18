import React from 'react';
import { Providers } from './providers';
import './globals.css';
import '../styles/landing.css';

export const metadata = {
    metadataBase: new URL('https://sammunat.com'),
    title: 'Sammunat – Innovate & Intern | Tech Internship Programs USA',
    description: "Join Sammunat's cutting-edge tech internship program. Gain hands-on experience with React, Next.js, AI integration, and deploy real-world projects. Expert mentorship, USA-based impact, 95% employment rate.",
    keywords: 'internship, tech internship, software development internship, mentorship, USA tech jobs, React internship, Next.js, AI integration, web development',
    authors: [{ name: 'Sammunat LLC' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://sammunat.com',
        title: 'Sammunat – Innovate & Intern | Tech Internship Programs',
        description: "Launch your tech career with hands-on experience in cutting-edge projects. Expert mentorship and real impact await.",
        siteName: 'Sammunat LLC',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sammunat – Innovate & Intern',
        description: "Join our tech internship program for cutting-edge experience.",
    },
};

// Separate viewport export (Next.js 14 requirement)
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#0062ff',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* DNS Prefetch and Preconnect for external resources */}
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

                {/* Optimized font loading with font-display: swap */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Favicon and app icons */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* Performance hints */}
                <meta httpEquiv="x-dns-prefetch-control" content="on" />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

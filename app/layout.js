import React from 'react';
import { Providers } from './providers';
import StyledComponentsRegistry from './lib/AntdRegistry';
import './globals.css';
import '../styles/landing.css';

export const metadata = {
    title: 'Sammunat – Innovate & Intern',
    description: "Join Sammunat's internship for cutting-edge tech experiences.",
    keywords: 'internship, tech, software development, mentorship, USA',
    authors: [{ name: 'Sammunat LLC' }],
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <Providers>
                        {children}
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}

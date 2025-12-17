import React from 'react';
import { Providers } from './providers';
import StyledComponentsRegistry from './lib/AntdRegistry';
import './globals.css';
import '../styles/landing.css';

export const metadata = {
    title: 'Sammunat – Innovate & Intern',
    description: "Join Sammunat's internship for cutting-edge tech experiences.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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

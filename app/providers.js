'use client';

import React from 'react';
import { ConfigProvider } from 'antd';

export function Providers({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0062ff',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    borderRadius: 8,
                    // Performance optimizations
                    motion: false, // Disable animations for better performance
                },
                // Disable hashing for performance
                hashed: false,
                // Disable CSS variables for faster rendering
                cssVar: false,
            }}
        >
            {children}
        </ConfigProvider>
    );
}

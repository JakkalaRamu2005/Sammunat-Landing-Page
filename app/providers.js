'use client';

import React from 'react';
import { ConfigProvider } from 'antd';

export function Providers({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0062ff',
                    colorSuccess: '#28a745',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                },
                // Reduce CSS-in-JS overhead
                hashed: false,
            }}
        >
            {children}
        </ConfigProvider>
    );
}

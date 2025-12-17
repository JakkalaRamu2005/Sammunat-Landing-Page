'use client';

import React from 'react';
import { ConfigProvider } from 'antd';

export function Providers({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#007BFF',
                    colorSuccess: '#28A745',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}

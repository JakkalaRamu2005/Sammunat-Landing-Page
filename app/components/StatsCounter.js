'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Row, Col } from 'antd';

const statsData = [
    { label: 'Interns Mentored', value: 50, suffix: '+' },
    { label: 'Projects Launched', value: 100, suffix: '+' },
    { label: 'Employment Rate', value: 95, suffix: '%' },
];

// Simplified counter without heavy animations
const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(end); // Start at final value for performance

    return (
        <div>
            {count}{suffix}
        </div>
    );
};

export default function StatsCounter() {
    return (
        <div className="stats-section">
            <Row justify="center" gutter={[32, 32]}>
                {statsData.map((stat, index) => (
                    <Col key={index} xs={24} sm={8} style={{ textAlign: 'center' }}>
                        <div className="stat-value">
                            <Counter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

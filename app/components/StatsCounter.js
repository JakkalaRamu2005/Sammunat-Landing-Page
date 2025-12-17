'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Typography, Card } from 'antd';

const { Title, Text } = Typography;

const statsData = [
    { label: 'Interns Mentored', value: 50, suffix: '+' },
    { label: 'Projects Launched', value: 100, suffix: '+' },
    { label: 'Employment Rate', value: 95, suffix: '%' },
];

const Counter = ({ end, duration = 2000, suffix }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={countRef}>
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

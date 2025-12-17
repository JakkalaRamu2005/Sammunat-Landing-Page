'use client';

import React from 'react';
import { Card, Typography, Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'Frontend Developer Intern',
        quote: "Sammunat transformed my career. The mentorship was world-class, and I shipped real code on day one.",
        rating: 5
    },
    {
        name: 'Priya Sharma',
        role: 'AI Research Intern',
        quote: "I learned more in 3 months here than I did in 2 years of university. The projects are actually cutting-edge.",
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Full Stack Intern',
        quote: "Don't expect to fetch coffee. You are treated like an engineer. Highly recommend for serious dev students.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <div className="testimonials-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <Title level={2} className="section-title">What Our Interns Say</Title>
                </div>
                <div className="testimonials-scroll">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="testimonial-card" bordered={false} hoverable>
                            <div className="testimonial-header">
                                <Avatar size={48} icon={<UserOutlined />} style={{ backgroundColor: '#007BFF' }} />
                                <div style={{ marginLeft: 16 }}>
                                    <Text strong style={{ display: 'block', fontSize: '16px' }}>{item.name}</Text>
                                    <Text type="secondary" style={{ fontSize: '12px' }}>{item.role}</Text>
                                </div>
                            </div>
                            <div style={{ margin: '12px 0' }}>
                                <Rate disabled defaultValue={item.rating} style={{ fontSize: '14px', color: '#ffec3d' }} />
                            </div>
                            <Paragraph style={{ fontStyle: 'italic', color: '#555' }}>
                                "{item.quote}"
                            </Paragraph>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

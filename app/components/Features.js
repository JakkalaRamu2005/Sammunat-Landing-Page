'use client';

import React from 'react';
import { Collapse, Typography, List, theme, Row, Col } from 'antd';
import { CaretRightOutlined, CodeOutlined, UsergroupAddOutlined, GlobalOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const featuresData = [
    {
        key: '1',
        title: 'Tech Innovation Projects',
        icon: <CodeOutlined />,
        content: (
            <List
                dataSource={[
                    'Build scalable web apps with React & Next.js 14+',
                    'Integrate AI agents and LLMs into workflows',
                    'Deploy to Vercel/AWS with CI/CD pipelines'
                ]}
                renderItem={(item) => (
                    <List.Item style={{ padding: '8px 0', border: 'none' }}>
                        <Text><CaretRightOutlined style={{ color: '#28a745', marginRight: 8 }} /> {item}</Text>
                    </List.Item>
                )}
            />
        ),
    },
    {
        key: '2',
        title: 'Expert Mentorship',
        icon: <UsergroupAddOutlined />,
        content: (
            <div>
                <Text italic style={{ display: 'block', marginBottom: 16, color: '#555', borderLeft: '3px solid #007BFF', paddingLeft: '12px' }}>
                    "Real growth happens when you are challenged by experts who care."
                </Text>
                <Text>
                    Direct access to our founder and senior engineers. Weekly code reviews, architecture planning sessions, and career guidance tailored to your goals.
                </Text>
            </div>
        ),
    },
    {
        key: '3',
        title: 'USA-Based Impact',
        icon: <GlobalOutlined />,
        content: (
            <Text>
                Sammunat LLC serves clients across the United States. Your code effectively reaches international markets, giving you global exposure and a standout resume item.
            </Text>
        ),
    },
    {
        key: '4',
        title: 'Community Building',
        icon: <TeamOutlined />,
        content: (
            <Text>
                Join our exclusive network on LinkedIn and WhatsApp. Connect with alumni, peers, and industry leaders to build relationships that last beyond the internship.
            </Text>
        ),
    },
];

export default function Features() {
    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
    };

    return (
        <section id="features" className="features-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <Title level={2} className="section-title">Why Intern With Us?</Title>
                    <Text className="section-desc">
                        Explore the core benefits designed to launch your career.
                    </Text>
                </div>

                <Row justify="center">
                    <Col xs={24} lg={20}>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} style={{ fontSize: '16px', color: isActive ? '#007BFF' : undefined }} />}
                            style={{ background: 'transparent' }}
                            items={featuresData.map(item => ({
                                key: item.key,
                                label: (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ fontSize: '20px', color: '#007BFF', display: 'flex' }}>{item.icon}</span>
                                        <span style={{ fontSize: '18px', fontWeight: 600 }}>{item.title}</span>
                                    </div>
                                ),
                                children: item.content,
                                style: panelStyle,
                            }))}
                        />
                    </Col>
                </Row>
            </div>
        </section>
    );
}

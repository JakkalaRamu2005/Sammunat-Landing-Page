'use client';

import React from 'react';
import { Row, Col, Card, Typography, Tag } from 'antd';
import { RocketOutlined, BuildOutlined, RobotOutlined, CloudServerOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const projects = [
    {
        title: 'AI Customer Agent',
        desc: 'Built a RAG-based chatbot using OpenAI & Pinecone.',
        icon: <RobotOutlined />,
        tags: ['AI', 'Python', 'React']
    },
    {
        title: 'SaaS Dashboard',
        desc: 'Developed a high-performance analytics dashboard for clients.',
        icon: <BuildOutlined />,
        tags: ['Next.js', 'Tremor', 'Supabase']
    },
    {
        title: 'Cloud Infrastructure',
        desc: 'Automated deployment pipelines using AWS CDK.',
        icon: <CloudServerOutlined />,
        tags: ['AWS', 'DevOps', 'CI/CD']
    },
    {
        title: 'E-commerce Engine',
        desc: 'Modernized a legacy shop platform with headless architecture.',
        icon: <RocketOutlined />,
        tags: ['Shopify', 'GraphQL', 'Node.js']
    }
];

export default function ProjectGallery() {
    return (
        <div className="gallery-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <Title level={2} className="section-title">Past Projects</Title>
                    <Paragraph className="section-desc">See what you could be building.</Paragraph>
                </div>
                <Row gutter={[24, 24]}>
                    {projects.map((proj, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <Card className="project-card" variant="borderless" hoverable>
                                <div className="project-icon" style={{ fontSize: '32px', color: '#007BFF', marginBottom: 16 }}>
                                    {proj.icon}
                                </div>
                                <Title level={4} style={{ fontSize: '18px', marginBottom: 8 }}>{proj.title}</Title>
                                <Paragraph type="secondary" style={{ fontSize: '14px', marginBottom: 16, minHeight: '44px' }}>
                                    {proj.desc}
                                </Paragraph>
                                <div className="project-tags">
                                    {proj.tags.map(tag => (
                                        <Tag key={tag} color="blue">{tag}</Tag>
                                    ))}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

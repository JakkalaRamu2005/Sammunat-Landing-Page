'use client';

import React, { useState } from 'react';
import { Button, Modal, Form, Input, Typography, message } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function CTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        // Construct mailto link
        const subject = encodeURIComponent(`Internship Application: ${values.name}`);
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\nPortfolio: ${values.portfolio}\n\n[Attached my resume]`
        );
        window.location.href = `mailto:internships@sammunat.com?subject=${subject}&body=${body}`;

        message.success('Opening your email client...');
        setIsModalOpen(false);
    };

    return (
        <section className="cta-section">
            <div className="section-wrapper">
                <div className="cta-banner">
                    <Title level={2} className="cta-title">Ready to Start Your Journey?</Title>
                    <Paragraph className="cta-text">
                        Applications for the upcoming cohort are closing soon. Don't miss your chance to innovate with us.
                    </Paragraph>

                    <div className="cta-highlight">
                        <Text strong style={{ color: '#ffffff', fontSize: '16px', display: 'block', marginBottom: 16 }}>
                            ⚠️ Closing Soon – Apply by Dec 19, 2025
                        </Text>
                    </div>

                    <Button
                        size="large"
                        className="hero-btn"
                        style={{ background: 'white', color: '#0062ff', border: 'none', minWidth: '200px' }}
                        onClick={showModal}
                    >
                        Start Application
                    </Button>
                </div>
            </div>

            <Modal
                title={<Title level={3} style={{ margin: 0 }}>Internship Application</Title>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                className="cta-modal"
            >
                <Paragraph type="secondary" style={{ marginBottom: 24 }}>
                    Please fill out the details below to start your application process. We will get back to you shortly.
                </Paragraph>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="John Doe" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input placeholder="john@example.com" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Portfolio / LinkedIn URL"
                        name="portfolio"
                        rules={[{ required: true, message: 'Please input your portfolio link!' }]}
                    >
                        <Input placeholder="https://linkedin.com/in/johndoe" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large" style={{ marginTop: 16 }}>
                            Submit via Email
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </section>
    );
}

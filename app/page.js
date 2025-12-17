'use client';

import React, { lazy, Suspense } from 'react';
import { Button, Layout, Space, Divider, Spin } from 'antd';
import { LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

// Lazy load heavy components
const Features = lazy(() => import('./components/Features'));
const CTASection = lazy(() => import('./components/CTASection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const StatsCounter = lazy(() => import('./components/StatsCounter'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));

const { Content } = Layout;

// Loading fallback component
const LoadingFallback = () => (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <Spin size="large" />
    </div>
);

export default function Home() {
    return (
        <div className="main-layout">
            {/* Navbar - Sticky & Glassmorphism */}
            <nav className="navbar">
                <div className="navbar-brand">
                    Sammunat
                </div>
                <div className="nav-links">
                    <Button type="text" href="#about">About</Button>
                    <Button type="primary" shape="round" href="mailto:internships@sammunat.com">Apply Now</Button>
                </div>
            </nav>

            <Content>
                {/* Hero Section - Critical, not lazy loaded */}
                <section className="hero-section">
                    <div className="section-wrapper">
                        <h1 className="hero-title">
                            Innovate with <span>Sammunat</span><br />
                            Join Our Internship Today
                        </h1>
                        <p className="hero-subtitle">
                            Launch your career in tech with hands-on experience in cutting-edge projects. Mentorship, real impact, and growth await.
                        </p>
                        <Space size="middle" className="hero-actions">
                            <Button type="primary" size="large" className="hero-btn" href="mailto:internships@sammunat.com">
                                Apply Now
                            </Button>
                            <Button size="large" className="hero-btn" href="#features">
                                View Program
                            </Button>
                        </Space>
                    </div>
                </section>

                {/* Lazy loaded sections */}
                <Suspense fallback={<LoadingFallback />}>
                    <StatsCounter />
                </Suspense>

                {/* About Section - Critical content, not lazy */}
                <section id="about" className="about-section">
                    <div className="section-wrapper">
                        <div className="section-header">
                            <h2 className="section-title">Who We Are</h2>
                            <div className="about-content">
                                Sammunat LLC is a USA-based tech innovation firm dedicated to building the future.
                                We specialize in delivering high-quality software solutions while nurturing the next generation of tech talent through immersive internship programs.
                            </div>
                        </div>
                    </div>
                </section>

                <Suspense fallback={<LoadingFallback />}>
                    <Features />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <ProjectGallery />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <Testimonials />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <CTASection />
                </Suspense>
            </Content>

            <footer className="footer-section">
                <div className="section-wrapper">
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/company/sammunat/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <LinkedinOutlined style={{ fontSize: '18px' }} /> LinkedIn Company
                        </a>
                        <a href="https://www.linkedin.com/newsletters/sammunat-llc-7314962798629830657/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <LinkedinOutlined style={{ fontSize: '18px' }} /> LinkedIn Newsletter
                        </a>
                        <a href="https://whatsapp.com/channel/0029VbAgR4SFMqrhDNF3l11T" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <WhatsAppOutlined style={{ fontSize: '18px' }} /> WhatsApp Channel
                        </a>
                        <a href="https://www.instagram.com/sammunat_llc" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <InstagramOutlined style={{ fontSize: '18px' }} /> Instagram
                        </a>
                    </div>
                    <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    <div className="footer-copyright">
                        © {new Date().getFullYear()} Sammunat LLC. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

'use client';

import React from 'react';
import { Button, Layout, Space, Divider } from 'antd';
import { LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import StatsCounter from './components/StatsCounter';
import ProjectGallery from './components/ProjectGallery';

const { Content } = Layout;

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
                {/* Hero Section */}
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

                {/* Stats Counter Section (New) */}
                <StatsCounter />

                {/* About Section */}
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

                {/* Features Section - Interactive */}
                <Features />

                {/* Project Gallery (New) */}
                <ProjectGallery />

                {/* Testimonials (New) */}
                <Testimonials />

                {/* CTA Section - Interactive Modal */}
                <CTASection />
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

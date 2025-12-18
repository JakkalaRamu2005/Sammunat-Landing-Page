'use client';

import React, { lazy, Suspense } from 'react';
import { LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

// Lazy load heavy components with proper chunking
const Features = lazy(() => import('./components/Features'));
const CTASection = lazy(() => import('./components/CTASection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));

// Optimized loading component
const MinimalLoader = () => <div style={{ minHeight: '200px' }} />;

export default function Home() {
    return (
        <div className="main-layout">
            {/* Navbar - Pure HTML for critical path */}
            <nav className="navbar">
                <div className="navbar-brand">Sammunat</div>
                <div className="nav-links">
                    <a href="#about" className="nav-link-text">About</a>
                    <a href="mailto:internships@sammunat.com" className="nav-link-btn">Apply Now</a>
                </div>
            </nav>

            <main>
                {/* Hero Section - Pure HTML, no React components */}
                <section className="hero-section">
                    <div className="section-wrapper">
                        <h1 className="hero-title">
                            Innovate with <span>Sammunat</span><br />
                            Join Our Internship Today
                        </h1>
                        <p className="hero-subtitle">
                            Launch your career in tech with hands-on experience in cutting-edge projects. Mentorship, real impact, and growth await.
                        </p>
                        <div className="hero-actions">
                            <a href="mailto:internships@sammunat.com" className="hero-btn hero-btn-primary">
                                Apply Now
                            </a>
                            <a href="#features" className="hero-btn hero-btn-secondary">
                                View Program
                            </a>
                        </div>
                    </div>
                </section>

                {/* Stats - Pure HTML */}
                <section className="stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Interns Mentored</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">100+</div>
                            <div className="stat-label">Projects Launched</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">95%</div>
                            <div className="stat-label">Employment Rate</div>
                        </div>
                    </div>
                </section>

                {/* About Section - Pure HTML */}
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

                {/* Lazy loaded sections - Load after critical content */}
                <Suspense fallback={<MinimalLoader />}>
                    <Features />
                </Suspense>

                <Suspense fallback={<MinimalLoader />}>
                    <ProjectGallery />
                </Suspense>

                <Suspense fallback={<MinimalLoader />}>
                    <Testimonials />
                </Suspense>

                <Suspense fallback={<MinimalLoader />}>
                    <CTASection />
                </Suspense>
            </main>

            {/* Footer - Pure HTML */}
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
                    <div className="footer-divider"></div>
                    <div className="footer-copyright">
                        © {new Date().getFullYear()} Sammunat LLC. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

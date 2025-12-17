'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CloseOutlined, checkCircleFilled } from '@ant-design/icons';
import { Typography, message } from 'antd';

const { Title } = Typography;

export default function ApplicationForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        portfolio: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (isOpen && firstInputRef.current) {
            // Delay focus slightly to allow animation to start
            setTimeout(() => firstInputRef.current.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.message) newErrors.message = 'Please tell us why you want to join';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const subject = encodeURIComponent(`Internship Application: ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPortfolio: ${formData.portfolio}\nMessage: ${formData.message}`
        );

        window.location.href = `mailto:shubham@sammunat.com?subject=${subject}&body=${body}`;
        message.success({
            content: 'Application drafted! Check your email client.',
            style: { marginTop: '20vh' },
        });
        onClose();
        setFormData({ name: '', email: '', portfolio: '', message: '' });
    };

    return (
        <>
            <div className="form-backdrop" onClick={onClose} aria-hidden="true" />
            <div className="form-overlay slide-down" role="dialog" aria-modal="true" aria-labelledby="form-title">
                <div className="form-container">
                    <div className="form-header">
                        <Title level={4} style={{ margin: 0 }} id="form-title">Apply for Internship</Title>
                        <button onClick={onClose} className="close-btn" aria-label="Close form">
                            <CloseOutlined />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="application-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                ref={firstInputRef}
                                id="name"
                                type="text"
                                className={errors.name ? 'error' : ''}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && <span id="name-error" className="error-msg">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                id="email"
                                type="email"
                                className={errors.email ? 'error' : ''}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="portfolio">Portfolio URL (Optional)</label>
                            <input
                                id="portfolio"
                                type="text"
                                value={formData.portfolio}
                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Why Sammunat? *</label>
                            <textarea
                                id="message"
                                rows={3}
                                className={errors.message ? 'error' : ''}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                aria-invalid={!!errors.message}
                            />
                            {errors.message && <span className="error-msg">{errors.message}</span>}
                        </div>

                        <div className="form-actions">
                            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                            <button type="submit" className="submit-btn">Submit Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

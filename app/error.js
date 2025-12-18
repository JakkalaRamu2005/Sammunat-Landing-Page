'use client';

export default function Error({ error, reset }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '72px', margin: '0', color: '#0062ff' }}>Oops!</h1>
            <h2 style={{ fontSize: '24px', margin: '16px 0' }}>Something went wrong</h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
                We're sorry for the inconvenience. Please try again.
            </p>
            <button
                onClick={() => reset()}
                style={{
                    background: '#0062ff',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}
            >
                Try Again
            </button>
        </div>
    );
}

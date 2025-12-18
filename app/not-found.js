export default function NotFound() {
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
            <h1 style={{ fontSize: '72px', margin: '0', color: '#0062ff' }}>404</h1>
            <h2 style={{ fontSize: '24px', margin: '16px 0' }}>Page Not Found</h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
                The page you're looking for doesn't exist.
            </p>
            <a
                href="/"
                style={{
                    background: '#0062ff',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 600
                }}
            >
                Go Home
            </a>
        </div>
    );
}

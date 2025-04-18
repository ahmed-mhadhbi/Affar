import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Hero Section */}
            <link rel="stylesheet" href='homeStyle.css'></link>
            <div
                style={{
                    flex: 1,
                    backgroundImage: `url(https://wallpaperaccess.com/full/2593068.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
                    Welcome
                </h1>
                <p style={{ fontSize: '1.5rem', marginTop: '10px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
                    Manage your listings seamlessly.
                </p>
                <div style={{ marginTop: '20px' }}>
                    <Link to="/login">
                        <button
                            style={{
                                margin: '0 10px',
                                padding: '10px 20px',
                                fontSize: '1.2rem',
                                color: '#fff',
                                backgroundColor: '#007bff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                        >
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button
                            style={{
                                margin: '0 10px',
                                padding: '10px 20px',
                                fontSize: '1.2rem',
                                color: '#fff',
                                backgroundColor: '#28a745',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                        >
                            Register
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: '#343a40',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '10px',
                    fontSize: '1rem',
                }}
            >
                © 2025 to Affar. All Rights Reserved.
            </footer>
        </div>
    );
};

export default Home;

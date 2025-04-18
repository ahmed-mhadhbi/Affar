import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [socialMedia, setSocialMedia] = useState({ twitter: '', instagram: '' });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/users/me');//fetch
        setUser(res.data);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setBio(res.data.bio || '');
        setSocialMedia(res.data.socialMedia || { twitter: '', instagram: '' });
      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleUpdate = async () => {
    try {
      const res = await api.put('/users/me', { username, email, bio, socialMedia });
      setUser(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete('/users/me');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <h1 style={styles.headline}>Profile</h1>
        {isEditing ? (
          <div style={styles.formContainer}>
            <div style={styles.profilePicturePlaceholder}></div>
            <button style={styles.changePictureButton}>Change Profile Picture</button>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                style={styles.textarea}
                rows="4"
              ></textarea>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Twitter</label>
              <input
                type="text"
                value={socialMedia.twitter}
                onChange={(e) => setSocialMedia({ ...socialMedia, twitter: e.target.value })}
                style={styles.input}
                placeholder="https://twitter.com/username"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>GitHub</label>
              <input
                type="text"
                value={socialMedia.github}
                onChange={(e) => setSocialMedia({ ...socialMedia, github: e.target.value })}
                style={styles.input}
                placeholder="https://github.com/username"
              />
            </div>
            <button onClick={handleUpdate} style={styles.primaryButton}>
              Save Changes
            </button>
            <button onClick={() => setIsEditing(false)} style={styles.secondaryButton}>
              Cancel
            </button>
          </div>
        ) : (
          <div style={styles.profileDetails}>
            <div style={styles.profilePicturePlaceholder}></div>
            <h2 style={styles.username}>{user.username}</h2>
            <p style={styles.email}>{user.email}</p>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Bio</h3>
              <p style={styles.sectionContent}>{bio || 'No bio available.'}</p>
            </div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Social Media</h3>
              <div style={styles.socialLinks}>
                {socialMedia.twitter && (
                  <a
                    href={socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                  >
                    Twitter
                  </a>
                )}
                {socialMedia.github && (
                  <a
                    href={socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                  >
                    GitHub
                  </a>
                )}
                {!socialMedia.twitter && !socialMedia.github && (
                  <p style={styles.sectionContent}>No social media links available.</p>
                )}
              </div>
            </div>
            <button onClick={() => setIsEditing(true)} style={styles.primaryButton}>
              Edit Profile
            </button>
            <button onClick={handleDelete} style={styles.dangerButton}>
              Delete Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;









const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  headline: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  profilePicturePlaceholder: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#e9f5f9',
    margin: '0 auto 20px',
  },
  changePictureButton: {
    fontSize: '0.875rem',
    color: '#3498db',
    textAlign: 'center',
    display: 'block',
    marginBottom: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#2c3e50',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    resize: 'vertical',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#6c757d',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  dangerButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'center',
  },
  username: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  email: {
    fontSize: '1rem',
    color: '#555',
  },
  section: {
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '8px',
  },
  sectionContent: {
    fontSize: '1rem',
    color: '#555',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  socialLink: {
    fontSize: '1rem',
    color: '#3498db',
    textDecoration: 'none',
  },
};
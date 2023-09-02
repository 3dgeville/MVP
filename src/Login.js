import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '#D3D3D3',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: 'black',
    fontSize: '24px',
    marginBottom: '20px'
  },
  button: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    color: 'black',
    cursor: 'pointer'
  }
};

function Login() {
	const navigate = useNavigate();
	const navigateToChatOverview = () => {
		navigate('/chat-overview');
	};

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <button onClick={navigateToChatOverview} style={styles.button}>Login</button>
    </div>
  );
}

export default Login;

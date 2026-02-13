import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Email and password are required');
            return;
        }

        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.access_token);
            toast.success('Login successful');
            navigate('/profile');
        } catch {
            toast.error('Invalid credentials');
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <Toaster position="top-right" />

            <div className="card shadow" style={{ width: '400px' }}>
                <div className="card-body">
                    <h3 className="text-center mb-4">Login</h3>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary w-100" onClick={handleLogin}>
                        Login
                    </button>

                    <p
                        className="text-center mt-3 text-primary"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/signup')}
                    >
                        Don’t have an account? Sign up
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

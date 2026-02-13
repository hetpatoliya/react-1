import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!email || !password) {
            toast.error('Email and password required');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        try {
            await api.post('/auth/register', { email, password });
            toast.success('Account created');
            navigate('/');
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <Toaster position="top-right" />

            <div className="card shadow" style={{ width: '400px' }}>
                <div className="card-body">
                    <h3 className="text-center mb-4">Sign Up</h3>

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

                    <button className="btn btn-success w-100" onClick={handleSignup}>
                        Create Account
                    </button>

                    <p
                        className="text-center mt-3 text-primary"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        Already have an account? Login
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

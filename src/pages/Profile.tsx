import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Profile = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get('/auth/me')
            .then((res) => setEmail(res.data.email))
            .catch(() => {
                localStorage.removeItem('token');
                navigate('/');
            });
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 text-center">
                <h3 className="mb-3">Profile</h3>
                <p className="mb-4">
                    <strong>Email:</strong> {email}
                </p>
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;

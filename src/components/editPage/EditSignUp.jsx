import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../butons/Button';
import axios from 'axios';
import PropTypes from 'prop-types';

export const BASE_URL = 'http://127.0.0.1:8000/api/v1';
export const UPDATE_USER = `${BASE_URL}/profile/update/`;
export const DELETE_USER = `${BASE_URL}/profile/delete/`;
export const USER_DETAIL = `${BASE_URL}/profile/`;

function EditProfile({ userData }) {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState(userData?.avatar || '/images/agregar-usuario.png');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatarOptions] = useState([
        '/image/account1.png',
        '/image/account2.png',
        '/image/account3.png',
        '/image/account4.png'
    ]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');  

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(USER_DETAIL, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const user = response.data;
                setUsername(user.username);
                setEmail(user.email);
                setSelectedAvatar(user.avatar || '/images/agregar-usuario.png');
            } catch (error) {
                setError('Error fetching user details');
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(UPDATE_USER, {
                username,
                email,
                password,
                avatar: selectedAvatar
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setMessage('Profile updated successfully!');
                setTimeout(() => {
                    navigate('/Account');
                }, 2000);
            } else {
                console.error('Failed to update profile:', response.data);
            }
        } catch (error) {
            setError('Error updating profile');
            console.error('Error updating profile:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(DELETE_USER, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                setMessage('Account deleted successfully!');
                localStorage.removeItem('token');
                setTimeout(() => {
                    navigate('/Signup');
                }, 2000);
            } else {
                console.error('Failed to delete account:', response.data);
            }
        } catch (error) {
            setError('Error deleting account');
            console.error('Error deleting account:', error);
        }
    };

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/AccountStart')}
                >
                    &larr; Back
                </button>

                <div className="flex flex-col items-center mt-2">
                    <h2 className="mt-6 text-xl font-bold">Edit Profile</h2>
                    <img
                        className="w-24 h-24 mb-4 rounded-full"
                        src={selectedAvatar}
                        alt="Selected Avatar"
                    />
                </div>

               
                {message && (
                    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSaveChanges}>
                    <div className="mb-4">
                        <label htmlFor="Username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Select Avatar</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {avatarOptions.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className={`w-14 h-14 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : 'border'}`}
                                    onClick={() => handleAvatarSelect(avatar)}
                                />
                            ))}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded-lg"
                    >
                        Save Changes
                    </Button>
                    <Button
                        type="button"
                        onClick={handleDelete}
                        className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-lg"
                    >
                        Delete Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

EditProfile.propTypes = {
    userData: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string,
    })
};

export default EditProfile;

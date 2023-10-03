import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


export default function Home(){
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/profile/${userId}`);
    };

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen pb-40 text-lg">
            <label>
                <input
                type="text"
                value={userId}
                onChange={handleInputChange}
                placeholder='username'
                autoComplete="off"
                className="bg-sub-alt-color text-sub-color h-10 w-48 sm:h-12 sm:w-80 px-4 rounded-lg"
                />
            </label>
            <div className="pl-4">
            <button type="submit" className="bg-sub-alt-color text-sub-color h-10 px-2 sm:px-6 sm:h-12 rounded-lg">search</button>
            </div>
            </form>
      </div>
    )
}
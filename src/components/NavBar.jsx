import { Link } from 'react-router-dom';
import logoLong from '../assets/logo-long.png';

export default function NavBar(){
    return (
        <div className="flex justify-center py-4">
            <Link to="/">
                <img className="h-10" src={logoLong} alt="logo" />
            </Link>
        </div>
    )
}
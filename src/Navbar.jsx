import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" class="flex justify-center border-b-2 border-gray-600 mt-4">
            <div className="NavTitle" class="NavTitle">
                <p>Components DB</p>
            </div>
            
            <div className="links" class="m-auto">
                <Link to="/" class="pr-5 cursor-pointer hover:text-violet-400">Home</Link>
                <Link to="/Create" class="pr-5 cursor-pointer hover:text-violet-400">Create</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
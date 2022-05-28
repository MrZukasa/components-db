import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" class="flex justify-center border-b-2 border-gray-600 bg-slate-900">
            <div className="NavTitle" class="NavTitle">
                <p>Components DB</p>
            </div>
            <div className="links" class="m-auto">
                <Link to="/Create"><div class="inline-flex pr-5 cursor-pointer transform hover:text-violet-400 hover:scale-110 transition ease-in-out duration-300">Create</div></Link>
                <Link to="/Search"><div class="inline-flex pr-5 cursor-pointer transform hover:text-violet-400 hover:scale-110 transition ease-in-out duration-300">Search</div></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
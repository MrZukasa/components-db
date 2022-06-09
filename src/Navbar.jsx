import { Link } from 'react-router-dom';
import { ParallaxHover } from 'react-parallax-hover';

const Navbar = () => {
    return (        
        <nav className="navbar" class="flex justify-center border-b border-gray-600 bg-slate-800">
            <div className="NavTitle" class="NavTitle">
                <ParallaxHover width={485} height={90} borderRadius={0} shadow={0} rotation={5} shine={0} scale={2} className="parallax">
                    <p className="text-center mt-2">Components DB</p>
                </ParallaxHover>
            </div>
            <div className="links" class="m-auto">
                <Link to="/"><div class="inline-flex pr-5 cursor-pointer transform hover:text-violet-400 hover:scale-110 transition ease-in-out duration-300">Home</div></Link>
                <Link to="/Details"><div class="inline-flex pr-5 cursor-pointer transform hover:text-violet-400 hover:scale-110 transition ease-in-out duration-300">Insert</div></Link>
                <Link to="/Search"><div class="inline-flex pr-5 cursor-pointer transform hover:text-violet-400 hover:scale-110 transition ease-in-out duration-300">Search</div></Link>
            </div>
        </nav>        
    );
}
 
export default Navbar;
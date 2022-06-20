import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Transition from '../Transition';

const Home = () => {

    const divStyle = {
        width: '100%',
        height: '78vh',
        backgroundImage: `url('/img/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return (
        <motion.div style={divStyle} initial={Transition.initial} animate={Transition.animate} exit={Transition.exit} transition={Transition.transitionEffect}>
            <div className="card">
                <Link to="/Details" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-slate-700 transition ease-in-out mb-3">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src='../img/deskimg.jpg' alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-stone-300">Wellcome</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Hey Everyones! 👋 Im Francesco and this is my real first project made with ReactJS as frontend and Node.js as backend. The whole project base the DB structure on a MySQL Database.
                            This program was written for a friend of mine and i took the opportunity to learn something about React and the Node workflows on a small single page web app
                            </p>
                    </div>
                </Link>
            </div>
            <div className="end">
                <p className="quote">'Mama always said life was like a box of chocolates. You never know what you're gonna get.'</p>
                <p className="signature">Forrest Gump</p>
            </div>            
        </motion.div>
    );
}
export default Home;
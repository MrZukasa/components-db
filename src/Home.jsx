import { Link } from 'react-router-dom';

const Home = () => {

    const divStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url('/img/background.jpg')`,
        backgroundSize: 'cover'
      };

    return (
        <div style={divStyle}>
            <div className="card">
                    <Link to="/Details" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-slate-700 mb-3">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src='../img/deskimg.jpg' alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-stone-300">Title</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Con questo piccolo sito voglio iniziare ad impraticirmi su quello che sarà il mio lavoro.
                            Con questo piccolo sito voglio iniziare ad impraticirmi su quello che sarà il mio lavoro.
                            Con questo piccolo sito voglio iniziare ad impraticirmi su quello che sarà il mio lavoro.
                            Con questo piccolo sito voglio iniziare ad impraticirmi su quello che sarà il mio lavoro.
                            Non pretendo di fare chissa che cosa ma sicuramente non so cosa sto scrivendo.
                            Quasi sicuramente non si capira un cazzo
                            </p>
                        </div>
                    </Link>
                </div>
            <p className="splash">'Mama always said life was like a box of chocolates. You never know what you're gonna get.'</p>
            <p className="signature">- Forrest Gump</p>            
        </div>
    );
}
export default Home;
import Themes from './Themes';
import { motion } from 'framer-motion';
import {AnimatePresence} from 'framer-motion';

const Footer = () => {
    const [colorTheme, setColorTheme] = Themes();

    return (
        <AnimatePresence exitBeforeEnter>
        <footer>            
            <div class="py-6 px-4 dark:bg-slate-800 bg-gray-200 border-t dark:border-gray-600 border-gray-900 flex justify-between transition duration-200">
                <div class="flex">
                    <a href="https://github.com/MrZukasa/components-db" class="text-gray-400 hover:scale-125 transition ease-in-out mr-2">                        
                        <img src="../img/GitHub_logo_Ukraine.png" class="w-5 h-5"/>
                    </a>
                    <span class="text-sm dark:text-gray-400 text-gray-900">© MrZukasa 2022. All Rights Reserved. MIT License</span>
                </div>
                <div class="mr-8">
                    <motion.button onClick={()=>{setColorTheme(colorTheme)}} initial={{ y: -20, opacity: 0 }}
                    key={colorTheme}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                        {colorTheme == 'light'?<div class="text-2xl hover:scale-125 transition ease-in-out">🌤️</div>: <div class="text-2xl hover:scale-125 transition ease-in-out">🌙</div>}
                    </motion.button>                    
                </div>
            </div>
        </footer>
        </AnimatePresence>
    );
}

export default Footer;
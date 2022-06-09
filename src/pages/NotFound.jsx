import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <motion.div className="container" class="content" initial={{opacity: 0, x: -200, y: 0}} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: 0, y: -100 }} transition={{type: 'linear'}}>
            <p class="text-violet-300 flex justify-start mt-1 p-10 text-9xl">404 :(</p>
            <p class="text-violet-300 flex justify-start mt-1 p-10 text-7xl">Page. Not. Found.</p>
        </motion.div>
    );
}
 
export default NotFound;
import "./navbar.scss"
import { motion } from 'framer-motion';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <motion.h1
                    initial={{ x: -1000, opacity: 0.7 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    >DXENIUM. </motion.h1>
                <motion.h2
                    initial={{ x: -1000, opacity: 0.7 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                
                >AVINASH KUMAR BLOGS</motion.h2>
            </nav>
        </div>
    )
}

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
                <a href="https://github.com/DarkXenium"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="img" alt="" /></a>
                <a href="https://www.instagram.com/avinash.2077k/"><img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" className="img2" alt="" /></a>
            </nav>
        </div>
    )
}

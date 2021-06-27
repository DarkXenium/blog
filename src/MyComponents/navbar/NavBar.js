import "./navbar.scss"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <motion.h1
                    initial={{ x: -1000, opacity: 0.7 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >The DarkXenium Blog</motion.h1>
                <motion.div className="links"
                    initial={{ fontSize: 18, opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{
                        scale:1.1,
                        textShadow:"0px 0px 3px rgb(200,235,235)",
                        originX:1
                    }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/create">Create blog</Link>
                </motion.div>
            </nav>
        </div>
    )
}

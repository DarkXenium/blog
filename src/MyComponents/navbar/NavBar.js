import "./navbar.scss"
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <h1>The DarkXenium Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create blog</Link>
                </div>
            </nav>
        </div>
    )
}

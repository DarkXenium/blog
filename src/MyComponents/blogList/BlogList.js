import './blogList.scss';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs }) {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>Written by {blog.author}</p>

                    </Link>
                </div>
            ))}
        </div>
    )
}

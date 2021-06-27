import { useHistory, useParams } from "react-router";
import useFetch from '../../useFetch';
import './blogDetails.scss';
import {motion} from 'framer-motion'

export default function BlogDetails() {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.4}}
                    >Written by {blog.author}</motion.p>
                    <div className="body">{blog.body}</div>
                    <motion.button onClick={handleClick}
                        initial={{ x:600,y: 110 }}
                        animate={{ x:650,y:-9 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 3px black",

                        }}
                    >Delete</motion.button>
                </article>
            )}
        </div>
    )
}

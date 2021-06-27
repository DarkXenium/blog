import { useState } from 'react';
import './create.scss';
import { useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog Added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">

            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog Body:</label>
                <textarea
                rows="10"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label >Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <motion.button
                initial={{y:30}}
                animate={{y:0}}
                whileHover={{
                    scale:1.1,
                    boxShadow:"0px 0px 3px black",
                 
                }}
                >Add blog</motion.button>}
                {isPending && <motion.button
                initial={{y:30}}
                animate={{y:0}}
                whileHover={{
                    scale:1.1,
                    boxShadow:"0px 0px 3px black",
                    
                }}
                >Adding blog....</motion.button>}
            </form>
        </div>
    )
}

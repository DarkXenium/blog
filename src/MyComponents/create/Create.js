import { useState } from 'react';
import './create.scss';
import { useHistory } from 'react-router-dom';

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
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog....</button>}
            </form>
        </div>
    )
}
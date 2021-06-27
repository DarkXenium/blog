import './home.scss'
import BlogList from '../blogList/BlogList.js'
import useFetch from '../../useFetch';

export default function Home() {

    const {data: blogs,isLoading,error}=useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Please Wait...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

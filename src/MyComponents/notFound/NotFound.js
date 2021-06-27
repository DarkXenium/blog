import './notFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>SO Sorry</h2>
            <p>The page Cannot be found!</p>
            <Link to="/">Click here to get back to the HomePage...</Link>

        </div>
    )
}

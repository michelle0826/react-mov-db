// 404 PAGE

import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <main>
            <section className='pnf'>
		        <h1>404: Page not found</h1>
		        <Link className="button-link" to="/">Back to Home</Link>
	        </section>
        </main>
    );
    
};

export default PageNotFound;
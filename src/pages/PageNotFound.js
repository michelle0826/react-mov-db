import { Link } from "react-router-dom";
import PageTitle from "../utilities/pageTitle";


function PageNotFound() {
    return (
        <main>
            <PageTitle title="Slate Movie Database" />
            <section className='pnf'>
		        <h1>404: Page not found</h1>
		        <Link className="button-link" to="/">Back to Home</Link>
	        </section>
        </main>
    );
    
};

export default PageNotFound;
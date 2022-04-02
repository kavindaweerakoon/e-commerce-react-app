import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Button that links to the /books page.

const Explorer = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore more <span className="purple">books</span>
                    </h2>
                   
                    <Link to="/books">
                        <button className='btn'>Explore books</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explorer;

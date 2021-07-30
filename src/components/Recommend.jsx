import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Recommend = () => {
    return (
        <>
            <div className="p-5 container">
               <div className="text-center">
                    <h1>Recommend</h1>
                    <p>It would be appreciated if you contribute atleast one recommendation to the lists.</p>
                    <hr/>
                </div>
                <div className="m-4 btn-group dropend">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Category
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/recommend/form">Songs</Link></li>
                        <li><Link className="dropdown-item" to="/recommend/form">Movies</Link></li>
                        <li><Link className="dropdown-item" to="/recommend/form">Anime</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Recommend

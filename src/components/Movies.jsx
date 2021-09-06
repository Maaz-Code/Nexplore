import React from 'react'

const Movies = () => {
    return (
        <>
           <div className="container">
                <div className="movies text-center">
                    <h1>Movies</h1>
                    <p>Here is the list of movies along with the genre it belongs to.</p>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5><u>Name</u></h5>
                        </div>
                        <div className="col-lg-6">
                            <h5><u>Genre</u></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies

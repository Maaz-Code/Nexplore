import React from 'react'

const Anime = () => {
    return (
        <>
           <div className="container">
                <div className="anime text-center">
                    <h1>Anime</h1>
                    <p>Here is the list of anime along with the number of episodes or seasons.</p>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5><u>Name</u></h5>
                        </div>
                        <div className="col-lg-6">
                            <h5><u>Seasons</u></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anime

import React from 'react'

const Songs = () => {
    return (
        <>
            <div className="container">
                <div className="songs text-center">
                    <h1>Songs</h1>
                    <p>Here is the list of songs along with the artist's name.</p>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5><u>Name</u></h5>
                            <div className="line col">
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5><u>Artist</u></h5>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Songs

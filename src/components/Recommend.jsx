import React from 'react'

const Recommend = () => {
    return (
        <>
            <div className="recommend container">
               <div className="text-center">
                    <h1>Recommend</h1>
                    <p>It would be appreciated if you contribute atleast one recommendation to the lists.</p>
                    <hr/>
                </div>
                <div className="p-4 btn-group dropend">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Category
                    </button>
                    <ul className="dropdown-menu">
                        <li id="selection1"><a className="dropdown-item" href="/recommend">Songs</a></li>
                        <li id="selection2"><a className="dropdown-item" href="/recommend">Movies</a></li>
                        <li id="selection3"><a className="dropdown-item" href="/recommend">Anime</a></li>
                    </ul>
                </div>
                <div className="row" id="details" hidden="true">
                    <div className="p-4 position-center col-md-12">
                       <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommend

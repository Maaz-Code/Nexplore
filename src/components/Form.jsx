import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Form = ({text}) => {
    return (
        <>
            <div className="mt-5 container">
               <div className="text-center">
                    <h1>Recommend</h1>
                    <p>It would be appreciated if you contribute atleast one recommendation to the lists.</p>
                    <hr/>
                </div>
                    <div className="shadow p-4 col-md-12">
                       <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-4">
                                <label for="exampleInputPassword1" className="form-label">{text}</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                        <Link to="/recommend">
                            <button type="button" className="mt-3 btn btn-dark">
                                <Icon.ArrowLeft/> Go Back
                            </button>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default Form

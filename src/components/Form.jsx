import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Form = () => {
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
                            <div className="mb-4">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name"/>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <input type="text" className="mr-3 form-control" id="exampleInputPassword1" placeholder="Reference"/>
                                <button type="button" className="btn btn-sm" data-bs-toggle="tooltip" title="help" data-bs-content="more info here" data-bs-placement="left" data-bs-container="body">
                                    <Icon.QuestionCircle/>
                                </button>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                        <Link to="/recommend">
                            <button type="button" className="mt-3 btn btn-dark btn-sm">
                                <Icon.ArrowLeft/> Go Back
                            </button>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default Form

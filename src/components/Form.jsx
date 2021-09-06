import React from 'react'
import Footer from './Footer';
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
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" required="true"/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="mr-3 form-control" id="exampleInputPassword1" placeholder="Reference" required="true"/>
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
            <Footer/>
        </>
    )
}

export default Form

import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
        <footer className="p-2 fixed-bottom bg-dark text-center">
            <p>
                Copyright © 2021 | Developed by Maaz Ahmed.
            </p>
            <div className="container">
                <div className="row">
                <div className="col">
                    <a href="https://github.com/Maaz-Code" target="_blank" rel="noreferrer" title="GitHub">
                    <Icon.Github/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://maaz-code.hashnode.dev" target="_blank" rel="noreferrer" title="Blogs">
                        <Icon.Pen/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.linkedin.com/in/maaz-ahmed-6b9b98187/" target="_blank" rel="noreferrer" title="LinkedIn">
                        <Icon.Linkedin/>
                    </a>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
};

export default Footer;
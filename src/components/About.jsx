import React from 'react';
import picture from '../about.png';
 
const About = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="content shadow pt-2 col-lg-6">
                    <h1>About Nexplore,</h1>
                    <p>
                        This website is a one stop solution to your searching problem. By searching I mean your hunt for new songs to listen or new movies to watch or maybe new anime to explore, everything is covered. Get instant recommended lists for new songs, movies and anime into which you can dive straight away. These lists are suggestions given by actual people who have watched those movies and anime and even people who have stumble some great songs. Just give one recommendation and you are ready to explore what others are enjoying. Never run out of suggestions anymore!!
                    </p>
                    <h5>"explore new stuff to cure your boredom."</h5>
                </div>
                <div className="content col-lg-6">
                    <img src={picture} alt="" className="img-fluid"/>
                </div>
            </div>            
        </div>
    )
}

export default About

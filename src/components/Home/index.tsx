import './style.css'
import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../Header';

export const Home =()=>{
    return(
        <>
        <Header/>
            <div className="slider">
                <h1 className="animate__animated animate__backInUp">
                    Welcome To SpaceX
            </h1>
            <p className="animate__animated animate__backInUp">
            SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
            </p>
            <div className="btn-div">
            <Link className="launch-btn-link" to="/launch" >
            <button className="launch-btn">
                Launches
                </button>
                </Link>
            </div>
            </div>
            </>
    )
}
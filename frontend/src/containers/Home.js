import React from 'react';
import {Link} from 'react-router-dom'

const Home =() => (
    <div className='container'>
        <div className="jumbotron mt-5 text-capitalize">
            <h1 className="display-4">Welcome to Auth.ng</h1>
            <p className="lead">This is a cool authentication system with all kinds of functionalities.</p>
            <p className="lead">made use of django djoser, react and redux</p>
            <hr className="my-4" />
            <p>Go ahead and login!</p>
            <Link className="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
        </div>
    </div>
)
export default Home;
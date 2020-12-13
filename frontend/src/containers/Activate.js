import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify,match }) => {
    const [verified, setverified] = useState(false)

    const verifiy_account = e => {
        const uid = match.params.uid;
        const token =match.params.token

        verify(uid, token);
        setverified(true)
    };

    

    if (verified)
        return <Redirect to='/login' />;
    
    return (
        <div className='container'>
            <div className="d-flex mb-3 flex-column justify-content-center align-items-center" style={{marginTop: '100px'}}>
                <h3>Verify Your Account</h3>
                <button
                    onClick={verifiy_account}
                    className="btn btn-outline-primary"
                    type="button"
                >
                    Activate
                </button>
            </div>
            
        </div>
    );
};



export default connect(null, { verify })(Activate);

import React from 'react'
import sucess from './../../images/nycat.gif';
const ContactSucess = () => {
    return (
        <div className="form-content">
            <div className="form-sucess">
                Thanks for your request!!
            </div>
            <img src={sucess} alt="sucess-image" className="form-img-2" />
        </div>
        )
}

export default ContactSucess;

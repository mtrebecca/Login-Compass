import React from "react";
import Logo from "../../components/img/logo.png";

import "../Home/Home.css"
import "../PageSucess/PageSucess.css"

function redirectHome(){
    window.location.href='/'   
}

const PageSucess = () => {

    return (
        <div className="container">
            <div className="block-form">
                <div className="block-sucess">
                <div className="block-header-sucess">
                    <img  src={Logo} />
                    <h1>Sucess!</h1>
                </div>
            <div className="btn-submit sucess">
                <button  className="back-sucess" onClick={redirectHome} >Go back!</button>
            </div> 
            </div>
            </div>
            
        </div>

    
    );
};

export default PageSucess;
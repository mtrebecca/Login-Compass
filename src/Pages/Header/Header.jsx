import React from "react";
import Logo from "../../components/img/logo.png";

import "./Header.css"

const Header = () => {

    return (
        <div>
            <div className="logo-img">
                <img  src={Logo} />
            </div>
            <div className="title">
                <h1>Intern Sign Up</h1>
            </div>
        </div>

    
    );
};

export default Header;
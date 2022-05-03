import React from "react";
import "./Style/navBar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
function NavBar(props){
    return(
        <div className="navBar">
            <h1>Komorebi Connect</h1>
            <div className="userInfo">
                <div className="agentIcon">
                <AccountCircleIcon color="#fafafa" sx={{fontSize:40}}/>
                </div>                
                <div className="userTags">
                    <h2>{props.userName}</h2>
                    <p>{props.userType}</p>
                </div>
            </div>
        </div>
    );

}

export default NavBar;
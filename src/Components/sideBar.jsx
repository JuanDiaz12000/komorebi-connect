import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import "./Style/sideBar.scss"
import { render } from "@testing-library/react";

function SideBar(){
    return(
        <div className="sideBar">
            <div className="accesses">
                <div className="icons">
                    <a href="/users">
                    <SearchIcon  sx={{fontSize: 40}}/>
                    <p>Search</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="/">
                    <RadioButtonCheckedIcon  sx={{fontSize: 40}}/>
                    <p>Record</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="">
                    <PersonIcon  sx={{fontSize: 40}}/>
                    <p>Users</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="">
                    <LocalOfferIcon  sx={{fontSize: 40}}/>
                    <p>Tags</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="">
                    <InsightsIcon  sx={{fontSize: 40}}/>
                    <p>Statistics</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="">
                    <SettingsIcon  sx={{fontSize: 40}}/>
                    <p>Settings</p>
                    </a>
                </div>
            </div>
            <div className="icons">
                <a href="">
                <HelpIcon  sx={{fontSize: 40}}/>
                <p>Help</p>
                </a>
            </div>
        </div>
    )

}

export default SideBar;
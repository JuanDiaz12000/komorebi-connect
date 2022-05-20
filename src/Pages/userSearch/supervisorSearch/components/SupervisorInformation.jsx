import React from "react";
import SupervisorForm from "./supervisorForm";
import UserAdminWindow from "./userAdminWindow";
import "./Style/supervisorInformation.scss"

function SupervisorInformation() {
    return(
        <div className="supervisor-info">
            <SupervisorForm/>
            <UserAdminWindow/>
        </div>
    )
}

export default SupervisorInformation
import "./Style/amazonConnectWindow.scss"
import ConnectLogo from './assets/connectLogo.svg'
function AmazonConnectWindow(){

    return(
        <div className="mainWindowContainer">
            <img src={ConnectLogo} alt="Amazon" style={{height:"35vh", width:"35vw"}}/>
            <h3>Amazon Connect</h3>
        </div>
    )

}

export default AmazonConnectWindow;
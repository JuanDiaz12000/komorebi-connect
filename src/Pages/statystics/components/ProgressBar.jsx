
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { display } from '@mui/system';
  
const ProgressBar = ({bgcolor,progress,height,agentName}) => {

    if (agentName == null){
      agentName = 'Agent Name'
    }
     
    const Parentdiv = {
        height: height,
        width: '20vw',
        backgroundColor: '#cccccc',
        borderRadius: 40,
        margin: 50,
        marginBottom:'1.5vh',
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right',
        color:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:700,
        userSelect: 'none',
      }
      
    return (

    <div>
      <div>
        <h3 style={
          {
            width:'5vw',
            marginBottom: '-2.9vh',
            marginTop: '3vh',
            marginLeft: '1vw',
            userSelect: 'none',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
          }
        }>{`${agentName}`} <AccountCircleIcon/></h3>
      </div>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          {`${progress}%`}
        </div>
      </div>
    </div>
    )
}
  
export default ProgressBar;
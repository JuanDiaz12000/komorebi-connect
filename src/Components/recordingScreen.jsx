import * as React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; 
import './Style/recordingScreen.scss'

//Código de Cronómetro: https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/

function RecordingScreenDialog(){
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(true);
    const [time, setTime] = React.useState(0);
    
    React.useEffect(() => {
      let interval = null;
    
      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);


    const[pause, setPause] = React.useState(true);
    function handlePause() {
        setPause(!pause);
        setIsPaused(!isPaused);
    }

    const [recording, setRecording] = React.useState(true);
    function handleClick() {
        setRecording(!recording);
        setPause(true);
        if(recording == true){
            setIsActive(true);
            setIsPaused(false);
        }
        else{
            setIsActive(false);
            setTime(0);
        }
    }

    return(
        <div className="RecordingContainer">
            <div className='topCont'>
                <h3> Running Time
                    <br/>
                    {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </h3>
                 { recording ? <div className='notRecordingTag'></div> : <div className='isRecordingTag'> <p> Recording </p> </div>}
            </div>
            <div className="controllers">
                <Button onClick={handleClick}
                className="buttonR"
                sx={recording ? 
                    {backgroundColor:"#232f3e"} : {backgroundColor:"red"} }
                >
                {recording ? <RadioButtonCheckedIcon style={{fontSize:'2.5vh',marginLeft:'auto'}}/> : <StopIcon style={{fontSize:'2.5vh',marginLeft:'auto'}}/>}
                <h4> {recording ? "Recording":"Stop"}</h4>
                   
                </Button>
                <Button 
                onClick={handlePause}
                className="buttonR"
                disabled={recording}
                sx={recording ? 
                    {backgroundColor:"#232f3e", color:'#ffffff'} : {backgroundColor:"green", color:'#ffffff'} }
                >
                {pause ? <PauseIcon style={{fontSize:'2.5vh',marginLeft:'auto', color:'white'}}/> : <PlayArrowIcon style={{fontSize:'2.5vh',marginLeft:'auto'}}/>}
                
                <h4>{pause ? "Pause":"Play"}</h4>
                   
                </Button>
            </div>
        </div>
    )
}

export default RecordingScreenDialog;
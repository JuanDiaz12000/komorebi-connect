import React, { useState } from "react";
import Registrarse from "./Registrarse";

import { useFormik } from "formik";
import { Button, Stack, Typography } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder";


const Grabador = (
    {
        screen,
        audio,
        video,
        downloadRecordingPath,
        downloadRecordingType
    }
) => {
    //manejo de video recorder
    const [recordingNumber, setRecordingNumber] = useState(0);
    
    const RecordView = () => {
        //manejo de cada evento del video-recorder
        const{
            status,
            startRecording: startRecord,
            stopRecording: stopRecord,
            mediaBlobUrl
        } = useReactMediaRecorder({screen: true, audio: true, video});
        //en el return interno debe ir el renderizado de la página que será grabada
            const startRecording = () => {
                return startRecord();
            };
            const stopRecording = () => {
                const currentTimeStamp = new Date().getTime();
                setRecordingNumber(currentTimeStamp);
                return stopRecord();
            };
            const viewRecording = () => {
                window.open(mediaBlobUrl, "_blank").focus();
            };
        return(
            <div className="GrabadorPantalla">
                <h1> Página de Prueba del Grabador de Pantalla</h1>
                <Registrarse/>
                <br></br><br></br><br></br>

                <Stack direction="row" spacing={2}>
                    {status && status !== "recording" &&(
                        <Button variant="contained" type="submit" onClick={startRecording}>
                            {mediaBlobUrl ? "Grabar nuevo video" : "Grabar"}
                        </Button>
                    )}

                    {status && status === "recording" &&(
                        <Button variant="contained" type="submit" onClick={stopRecording}>
                            Pausar
                        </Button>
                    )} 

                    {mediaBlobUrl && status && status === "stopped" &&(
                        <Button variant="contained" type="submit" onClick={viewRecording}>
                            Visualizar
                        </Button>
                    )}      
                    
                    <Button variant="contained" type="submit">Guardar</Button>

                </Stack>
                <Typography variant="h4" component="div">
                    Estado de la grabación: {status && status.toUpperCase()}

                </Typography>
            </div>
        );
    }
    return(
       <div className="Wrapper-Grabador-Pantalla">
           {RecordView()}
       </div> 
        );
}



export default Grabador;
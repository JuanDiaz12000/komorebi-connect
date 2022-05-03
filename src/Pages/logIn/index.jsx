import './Style/login.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KomorebiLogo from '../../Components/assets/Komorebi.svg'
import { useNavigate } from 'react-router-dom';

function Login(){
    let navigate = useNavigate(); 
    const routeChange= ()=>{ 
      navigate('/users');
    }
    return(
        <div className='loginScreen'>
            <img src='https://wallpapercave.com/wp/wp8063327.jpg' style={{height:'100vh', width:'65vw'}}/>
            <div className='logInPanel'>
                <div className='Komorebi'>
                    <img src={KomorebiLogo} style={{height:'6.5vh', width:'6.5vw'}}/>
                    <h1>Komorebi Connect</h1>
                </div>
                <div className='credentials'>
                    <TextField
                    type="email"
                    label="Username or Email Address"
                    style={{marginBottom:'3.5vh', height:'', width:'18.5vw', fontSize:'2rem'}}
                    />
                    <TextField
                    /* id="outlined-password-input" */
                    label="Password"
                    type="password"
                    style={{marginBottom:'3.5vh', width:'18.5vw', fontSize:'2rem'}}
                    />
                    <Button
                    onClick= {routeChange}
                    style={{
                        backgroundColor: '#ff9900',
                        color: '#ffffff',
                        width: '8.5vw',
                        height: '5.25vh',
                        justifyContent: 'center',
                        borderRadius: '2vw',
                        boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        marginTop: '5vh',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textTransform: 'none'
                    }}
                    >Log In</Button>
                </div>
                
            </div>
        </div>
    )


}

export default Login;

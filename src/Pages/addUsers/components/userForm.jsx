import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import './Style/userForm.scss'
import { useFormik } from 'formik';

// Colapsar supervisor si no es 'Agent" o 'null' el rol.

function UserForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    });

    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return(
            <div className="form-container">
            <h1>Add User</h1>
            <form onSubmit={formik.handleSubmit} className="userForm">
                <TextField
                    type="text"
                    label="Name"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem'}}
                />
                <TextField
                    type="email"
                    label="Email Address"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem'}}
                />
                <TextField
                    type="password"
                    label="Password"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem'}}
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    style={{marginBottom:'3.5vh', height:'', width:'30vw', fontSize:'2rem'}}
                />
                <FormControl sx={{ m: 1, minWidth: '30vw' }}>
                <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Role</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={filter}
                label="Search By"
                onChange={handleChange}
                >
                <MenuItem value={10}>Agent</MenuItem>
                <MenuItem value={20}>Supervisor</MenuItem>
                <MenuItem value={30}>Manager</MenuItem>
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: '30vw' }}>
                <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Supervisor</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={filter}
                label="Supervisor"
                onChange={handleChange}
                >
                <MenuItem value={10}>Héctor Noyola</MenuItem>
                <MenuItem value={20}>Annya Verduzco</MenuItem>
                <MenuItem value={30}>Daniel Lara</MenuItem>
                </Select>
                </FormControl>
                <Button
                    style={{
                        backgroundColor: '#ff9900',
                        color: '#ffffff',
                        width: '10vw',
                        height: '5.25vh',
                        justifyContent: 'center',
                        borderRadius: '2vw',
                        boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        marginTop: '2vh',
                        marginBottom: '2vh',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textTransform: 'none'
                    }}
                    >Submit</Button>
            </form>
            </div>
    );
}

export default UserForm;
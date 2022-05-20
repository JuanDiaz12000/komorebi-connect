import "./Style/userAdminWindow.scss"
import TableN from "./tableN";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const colNames = [
    { id: 'ID', label: 'ID', minWidth: 170, format: (value) => value.toLocaleString('en-US') },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 170},
    { id: 'role', label: 'Role', minWidth: 170 },
];
  
  
const list = [
    {ID: 1, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 2, name: "Annya Paulina Verduzco", status: "Activo", role: "Supervisor"},
    {ID: 3, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 4, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 5, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 6, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},
    {ID: 7, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 8, name: "Annya Paulina Verduzco Dulzura", status: "Activo", role: "Supervisor"},
    {ID: 9, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 10, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 11, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 12, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},
    {ID: 13, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 14, name: "Annya Paulina Verduzco Dulzura", status: "Activo", role: "Supervisor"},
    {ID: 15, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 16, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 17, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 18, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},
    {ID: 19, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 20, name: "Annya Paulina Verduzco Dulzura", status: "Activo", role: "Supervisor"},
    {ID: 21, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 22, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 23, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 24, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},
    {ID: 25, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 26, name: "Annya Paulina Verduzco Dulzura", status: "Activo", role: "Supervisor"},
    {ID: 27, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 28, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 29, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 30, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},
    {ID: 31, name: "Selena Flores Jimenez", status: "Activo", role: "Agente"},
    {ID: 32, name: "Annya Paulina Verduzco Dulzura", status: "Activo", role: "Supervisor"},
    {ID: 33, name: "Arturo Noyola", status: "Activo", role: "Agente"},
    {ID: 34, name: "Juan Ernesto Díaz Noguez", status: "Inactivo", role: "Agente"},
    {ID: 35, name: "Jesús Daniel Lara Yamamoto", status: "Activo", role: "Supervisor"},
    {ID: 36, name: "Leonardo Arturo Morales López", status: "Activo", role: "Agente"},


];
  

function UserAdminWindow(){

    let navigate = useNavigate(); 
    const routeChange= ()=>{ 
        navigate('/new-user');
    }
   
    return(
        <div className="mainUserContainer">
            <h3>User Administration</h3>
            <TableN columns={colNames} rows={list}/>
            <Button className="add"
                    onClick={routeChange}
                    style={{
                        backgroundColor: '#ff9900',
                        color: '#ffffff',
                        width: '6.5vw',
                        height: '5.25vh',
                        justifyContent: 'center',
                        borderRadius: '2vw',
                        boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                        fontWeight: 500,
                        fontSize: '1.2rem',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: '4vw',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textTransform: 'none'
                    }}
                    >+  ADD</Button>
            
        </div>
         
    );

}

export default UserAdminWindow;

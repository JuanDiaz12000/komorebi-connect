import "./Style/userAdminWindow.scss"
import TableN from "./table";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const colNames = [
    { id: 'ID', label: 'ID', minWidth: 170, format: (value) => value.toLocaleString('en-US') },
    { id: 'name', label: 'Name', minWidth: 100 },
];

const list = [
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
    {ID: 1, name: "Leonardo Morales Leonardo Morales"},
    {ID: 2, name: "Annya Verduzco Annya Verduzco"},
    {ID: 3, name: "Juan Díaz Juan Díaz"},
    {ID: 4, name: "Daniel Yamamoto Daniel Yamamoto"},
    {ID: 5, name: "Héctor Noyola Héctor Noyola"},
];
  

function UserAdminWindow(){
   
    let navigate = useNavigate(); 
    const routeChange= ()=>{ 
        navigate('/new-user');
    }

    return(
        <div className="mainUserContainer">
            <h3>Assigned Agents</h3>
            <TableN columns={colNames} rows={list}/>
            <Button className="add"
                    onClick= {routeChange}
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

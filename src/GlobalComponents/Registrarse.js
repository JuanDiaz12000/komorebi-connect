import React from "react";
import { useFormik } from 'formik';

function Registrarse(){
    const validate = values =>{
        const errors = {};

        if(!values.email){
            errors.mail = 'Obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email invalido'
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(
        <div>
        <h1> Formulario de registro</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email"> Email: </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}

            />
            {formik.errors.email ? <div>{formik.errors.email}</div>: null}
        <br></br>
            <button type="submit"> Registrarse</button>
        </form>
        </div>
    );
}

export default Registrarse;
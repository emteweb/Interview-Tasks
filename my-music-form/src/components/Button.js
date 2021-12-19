import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Save from './Save';


const Button = (props) => {

    return (
        <>
            <button type="submit" className="btn btn-dark" disabled={props.formValid}
                onClick={props.click}>
                <Link to="/user/save">Click me</Link>

            </button>


        </>
    )
};




export default Button;

//<button type='submit' onClick={props.click}>Click me!!!</button>


{/* <button>
<Link to='/user/save'>Click me</Link>
</button>
<Routes>
<Route path='/user/save' element={<Save />}> </Route>

</Routes> */}
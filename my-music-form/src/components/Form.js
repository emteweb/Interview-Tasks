import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Name from './Name';
import NIP from './NIP';
import Pesel from './Pesel';
import PhotoChoice from './PhotoChoice';
import Photo from './Photo';
import Status from './Status';
import Surname from './Surname';

const Form = (props) => {
    //console.log(`Is PESEL visible ${props.peselVisible}`);
    //console.log(`Is NIP visible ${props.nipVisible}`);
    //console.log("********************");
    console.log(props.name);
    return (

        <div className="mainForm">
            <form className='form-horizontal needs-validation' method='POST'>
                <h1> Fill in the form</h1>
                <Name value={props.name} change={props.change} />
                <Surname value={props.surname} change={props.change} />
                <Status checked={props.checked} />

                <Pesel value={props.peselNumber} change={props.change} visible={props.peselVisible} />
                <NIP value={props.nipNumber} change={props.change} visible={props.nipVisible} />

                <PhotoChoice img_file={props.img_file} />
                <Photo image={props.image} />

                {/*                 <Link to='/user/save'>Wyslij</Link>
                <br/>
                <Link to='/'>Back</Link> */}

                <Button click={props.click} value={props.name} />
            </form>
        </div>

    );
}

export default Form;
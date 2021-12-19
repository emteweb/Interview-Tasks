import React from 'react';
import Pesel from './Pesel';
import NIP from './NIP';

const Number = (props) => {
    return ( 
        <>
        <Pesel value={props.peselNumber} change={props.change} visible={props.peselVisible} />
            <NIP value={props.nipNumber} change={props.change} visible={props.nipVisible} />
        </>
     );
}
 
export default Number;
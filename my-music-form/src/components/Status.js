import React from 'react';


const Status = (props) => {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"
                    id="type-person" value='type-person' onChange={props.checked}></input>
                    <label className="form-check-label" htmlFor="type-person">
                        Osoba fizyczna
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                id="type-business" value='type-business' onChange={props.checked}></input>
                    <label className="form-check-label" htmlFor="type-business">
                        Firma
                    </label>
            </div>

        </>
    );
}

export default Status;
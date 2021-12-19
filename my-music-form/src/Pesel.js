import React from 'react';


const Pesel = (props) => {
    return (
        <>
            {props.visible
                ?
                <div className="form-group" visible={props.peselVisible}>
                    <label className="control-label col-sm-2" htmlFor="peselNumber">Pesel:</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="peselNumber"
                            placeholder="Wpisz numer PESEL" onChange={props.change} />
                    </div>
                </div>

                : null
            }
        </>
    );
}

export default Pesel;

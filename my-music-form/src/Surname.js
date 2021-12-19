import React from 'react';


const Surname = (props) => {
    return (
        <>
<div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="surname">Nazwisko:</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="surname"
                            placeholder="Wpisz imię" onChange={props.change}></input>
                    </div>
                </div>

        </>
    );
}

export default Surname;
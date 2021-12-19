import React from 'react';


const Name = (props) => {
    return (
        <>
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Imię:</label>
                <div className="col-sm-12">
                    <input type="text" className="form-control" id="name"
                        placeholder="Wpisz imię" onChange={props.change} value={props.value}></input>
                        <div className="valid-feedback"></div>
                </div>
            </div>
        </>
    );
}

export default Name;
import React from 'react';


const NIP = (props) => {
    return (
        <>
            {props.visible
                ?
                <div className="form-group" visible={props.nipVisible}>
                    <label className="control-label col-sm-2" htmlFor="nipNumber">NIP:</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="nipNumber"
                            placeholder="Wpisz numer NIP" onChange={props.change} />
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default NIP;
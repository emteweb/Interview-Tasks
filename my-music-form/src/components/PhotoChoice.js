import React from 'react';


const PhotoChoice = (props) => {
    return (
        <>
            
            <label htmlFor="formFile" className="form-label"></label>
            <input className="form-control form-control-sm" id="formFile" type="file"
            accept='image/jpg, image/jpeg' onChange={props.img_file} />
        </>
    );
}

export default PhotoChoice;
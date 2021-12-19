import React from 'react';


const Photo = (props) => {
    return (
        <>
            {
                props.image
                    ?
                    <div className='photo'>
                        <img src={props.image} className="photo" id="target" alt="pic" />
                    </div>
                    :
                    null
            }
        </>

    );
}

export default Photo;
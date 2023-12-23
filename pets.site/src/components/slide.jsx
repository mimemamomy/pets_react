import React from 'react';


const Slide = (props) => {

    return (
        <>
            <div className="carousel-inner" >

                <img src={'https://pets.сделай.site' + props.data.image} className="img-fluid rounded mx-auto d-block img-thumbnail mb-2" alt="photo_pets" style={{ height: '500px' }} />
                <h4 className="text-center text-align">{props.data.kind}</h4>
                <h6 className="text-center">{props.data.description}</h6>
                <h6 className="text-center"> ID: {props.data.id}</h6>
            </div>
        </>
    );
};

export default Slide; 
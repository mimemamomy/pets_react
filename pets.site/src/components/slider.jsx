import React from 'react';
import Slide from "./slide";
import { useEffect, useState } from 'react';


const Slider = () => {

    let [slide, setSlide] = useState({ data: { pets: [] } });
    // let [show, setShow] = useState({ display: 'flex' });


    var reqestOptions = { method: "GET" };
    useEffect(() => {
        fetch("https://pets.сделай.site/api/pets/slider", reqestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSlide(result)
            })
            .catch(error => console.log('error', error));
    }, [])



    let slides = slide.data.pets.map((pet, index) => {
        let tmpClass = "carousel-item";

        if (index == 0) {            
            tmpClass += " active";
        }       

        return <Slide data={pet} key={index} css_class={tmpClass} />;

    })


    if (slide.data.pets.length==0){
        return;
    }

    debugger;

    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >

                <div className="carousel-indicators">

                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-lebel="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-lebel="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-lebel="Slide 3"
                    />
                </div>

                <div className="carousel-inner">
                    
                    
                    
                    <div className="carousel-item active">
                        <img src={`https://pets.xn--80ahdri7a.site` + slides[0].props.data.image} className="d-block w-100" alt="животное" style={{ backgroundColor: "#c4ecbd" }} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{  slides[0].props.data.kind}</h5>
                        <p>{  slides[0].props.data.description}</p>
                    </div>

                    <div className="carousel-item">
                        <img src={`https://pets.xn--80ahdri7a.site` + slides[2].props.data.image} className="d-block w-100" alt="животное" style={{ backgroundColor: "#c4ecbd" }} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{ slides[2].props.data.kind}</h5>
                        <p>{ slides[2].props.data.description}</p>
                    </div>

                    <div className="carousel-item">
                        <img src={`https://pets.xn--80ahdri7a.site` + slides[3].props.data.image} className="d-block w-100" alt="животное" style={{ backgroundColor: "#c4ecbd" }} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{  slides[3].props.data.kind}</h5>
                        <p>{ slides[3].props.data.description}</p>
                    </div>

                    <div className="carousel-item">
                        <img src={`https://pets.xn--80ahdri7a.site` + slides[4].props.data.image} className="d-block w-100" alt="животное" style={{ backgroundColor: "#c4ecbd" }} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{ slides[4].props.data.kind}</h5>
                        <p>{ slides[4].props.data.description}</p>
                    </div>

                   
                </div>

            </div>

            <button
                className="carousel-control-prev"
                tupe="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >

                <span className="carosel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden"> Предыдущий</span>
            </button>

            <button
                className="carousel-control-next"
                tupe="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">

                <span className="carosel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Следующий</span>
            </button>
        </>
    );    
    
};

export default Slider;

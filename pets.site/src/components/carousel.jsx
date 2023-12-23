// import React from 'react';
// import img from '../images/dog2.jpg';
// import { useEffect, useState } from 'react';


// const Carousel = (props) => {

//   let [slide, setSlide] = useState({ data: { pets: [] } });
//   let [show, setShow] = useState({ display: 'flex' });
  

//   var reqestOptions;

//   useEffect(() => req_slide(slide, setSlide), []);
//   function req_slide(slide, setSlide) {
//     reqestOptions = {
//       method: 'GET',
//     };
//   }

//   fetch("https://pets.сделай.site/api/pets/slider", reqestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result)
//       setSlide(result)
//       setShow({ display: 'none' });

//     })
//     .catch(error => console.log('error', error));



//   let slides = slide.data.pets.map((pet, index) => {
//     if (index == 0) {
      
//       return <Slide data={pet} key={index} css_class='carousel-item active' />;
//     }
//     else {
//       return <Slide data={pet} key={index} css_class='carousel-item' />;
//     }
//   })

//   let indicators = slide.data.pets.map((pet, index) => {
//     if (index == 0) {
//       return <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>
//     } else {
//       return <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-lebel={"Slide" + (Number(index) + 1)} key={index + 'btn'}></button>
//     }
//   })

//   return (
//     <>
//       <div className="container p-sm-0 p-md-2">
//         <div
//           id="carouselExampleCaptions"
//           className="carousel slide w-100  border-bottom mb-3 rounded"
//         >
//           <div className="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to={0}
//               className="active"
//               aria-current="true"
//               aria-label="Slide 1"
//             />
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to={1}
//               aria-label="Slide 2"
//             />
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to={2}
//               aria-label="Slide 3"
//             />
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src={img}
//                 className="d-block w-100"
//                 alt="cat"
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Нашелся кот!!!</h5>
//                 <p>
//                   Черный кот, с белым пятнышком на груди. Нашли на Плесецкой улице,
//                   звоните по номеру 89623456545
//                 </p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src={img} className="d-block w-100" alt="dog" />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Найдена собака</h5>
//                 <p>
//                   Обычная корги, бегала пару дней по районую. Звоните по номеру
//                   89142365895
//                 </p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img
//                 src={img}
//                 className="d-block w-100"
//                 alt="cat"
//               />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Нашелся рыжий котейка</h5>
//                 <p>
//                   Красивый толстый кот, сидел у нас под машиной, на планерной улице.
//                   Пишите в лс{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div id="cerousel_elements">
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide="prev"
//             >
//               <span className="carousel-control-prev-icon" aria-hidden="true" />
//               <span className="visually-hidden">Предыдущий</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide="next"
//             >
//               <span className="carousel-control-next-icon" aria-hidden="true" />
//               <span className="visually-hidden">Следующий</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Carousel
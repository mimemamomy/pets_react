// import React, { useRef, useState } from 'react'

// const FormAddNotices = () => {

//   function Poisk() {
//     let [zap, setZap] = useState({});
//     let [cardsu, setCards] = useState([]);
//     let blocks = useRef();

//     function skai (e) {
//       e.preventDefault();

//       const forms = document.getElementById('form-select')

//       if (!forms.checkValidity()) {
//         e.stopPropagation()
//         forms.classList.add('was-validated')
//         return
//       }

//       var myHeaders = new Headers();

//       var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//       };

//       fetch ("https://pets.сделай.site/api/search/order?district=", + zap.district + "&kind=" + zap.kind, zapOptions)
//         .then(response => response.json())
//         .then(result => {
//           if (result.data.orders.lenght > 0) {
//             setCards(result.data.orders);
//             blocks.current.style.display = 'none';
//           }
//           else {
//             let message = 'Таких объявлений нет';
//             blocks.current.innertext = message;
//             blocks.current.style.background = "#C76864";
//             blocks.current.style.color = "black";
//             blocks.current.style.border = "1px solid #801818";
//             blocks.current.style.display = "flex";
//           }
//         })
//         .catch(error => console.log('error', error));

//     }

//   }

//   return (
//     <>
//       <form id="form-select" className="col-xs-12 col-md-6 col-lg-4" style={{ minWidth: 300 }} noValidate onSubmit={skai}>


//         <div className="mb-3">
//           <label htmlFor="exampleInputVid" className="form-label">Вид животного</label>
//           <input type="text" className="form-control" id="exampleInputVid" aria-label="Search" onChange={(e) => setZap({ ...zap, kind: e.target.value})} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputDistrict" className="form-label">Район</label>
//           <input type="text" className="form-control" id="xampleInputDistrict" aria-label="Search" onChange={(e) => setZap({ ...zap, district: e.target.value})} required />
//         </div>

//         <button type="button" className="btn btn-success mt-4" id="btn_serch">Поиск</button>
//       </form >
//     </>
//   )
// }

// export default FormAddNotices
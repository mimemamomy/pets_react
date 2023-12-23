import React, { useRef, useState } from "react";


const Subscription = () => {

  let [mail, setMail]=useState('');
  let message=useRef()
  let alertMessage=useRef()


    const send=(e)=>{
    e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");


      var raw = JSON.stringify(mail);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    fetch("https://pets.сделай.site/api/subscription", requestOptions)
    .then(response => response.status)
    .then(result => {
      console.log(result)
      if (result==204) {
        message.current.classList.remove('d-none');
        alertMessage.current.classList.add('d-none')
      }
      else{
        message.current.classList.add('d-none');
        alertMessage.current.classList.remove('d-none')
      }
    })
    .catch(error => console.log('error', error));
      }


    return ( <div>
    <form id="conteiner" style={{ minWidth: 300 }} onSubmit={send} noValidate>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Введите адрес электроной почты
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e)=>setMail({...mail, email:e.target.value})}
      />
    </div>
    <button type="submit" className="btn btn-success">
      Подписаться
    </button>
  </form>
  
  <div className="alert alert-success text-center m-3 d-none" role="alert">
  Вы успешно подписались на новости
</div>

<div className="alert alert-danger text-center m-3 d-none" role="alert" ref={alertMessage}>
  Вы неправильно ввели адрес электронной почты
</div>
</div>

  );
}
 
export default Subscription;
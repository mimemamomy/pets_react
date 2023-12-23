import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";


const FormRegistration = () => {


  let [user, setUser] = useState();

  let blocks = useRef();



  function sign(e) {
    e.preventDefault();

    const forms = document.getElementById('form')
    
    if (!forms.checkValidity()) {
      e.stopPropagation()
      forms.classList.add('was-validated')
      return
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "name": document.getElementById("exampleInputName").value,
        "phone": document.getElementById("exampleInputPhone").value,
        "email": document.getElementById("exampleInputEmail1").value,
        "password": document.getElementById("exampleInputPassword").value,
        "confirm": document.getElementById("exampleCheck1").value
      }),
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/register", requestOptions)
      .then(response => response.json)
      .then(result => {
        console.log(result)
        if (result == 204) {
          document.getElementById("success").classList.remove("d-none");
          document.getElementById("alert").classList.add("d-none");
        }
        else {
          document.getElementById("alert").classList.remove("d-none");
          document.getElementById("success").classList.add("d-none");
        }
      })

      .catch(error => console.log('error', error));





  }

  return (
    <>
      <form className="col-sm-12 col-md-8 col-lg-4 needs-validation" style={{ minWidth: 300 }} noValidate onSubmit={sign} id='form'>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Имя</label>
          <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" required onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Номер</label>
          <input type="phone" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Введите пароль еще раз</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(e) => setUser({ ...user, rassword_confirmation: e.target.value })} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPhoto" className="form-label">Фото профиля</label>
          <input type="file" className="form-control" id="exampleInputPhoto" aria-describedby="photoHelp" />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
        </div>

        <button type="button" className="btn btn-outline-success me-2" onClick={sign}>
          Зарегестрироваться
        </button>

        <button type="button" className="btn btn-outline-success">
          <Link to={"/ent"}>Вход</Link>
        </button>
      </form>
      <div id="success" className="alert alert-success text-center m-3 d-none" role="alert">
        Вы успешно зарегестрировались
      </div>


      <div id="alert" className="alert alert-danger text-center m-3 d-none" role="alert">
        Вы неправильно ввели адрес электронной почты или пароль
      </div>

      
    </>
  )
}

export default FormRegistration;




import React, {useRef, useState} from 'react';


const FormEnter = () => { 
  debugger;

  let [user, setUser]=useState();  
  let [token, setToken]=useState();
  let goodMessage=useRef();
  let badMessage=useRef()


const auth=(e)=>{  
    e.preventDefault();
   
    const forms = document.getElementById('form')
  
        if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 
      
    console.log(user)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let raw = JSON.stringify(user);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://pets.сделай.site/api/login", requestOptions)
    .then(response=> response.json())  
    .then(result=>{
      console.log(result)
        if ('data' in result){
        localStorage.token=result.data.token
          setToken(result.data.token)
         goodMessage.current.classList.remove('d-none');
         badMessage.current.classList.add('d-none');
    } else {
      goodMessage.current.classList.add('d-none');
      badMessage.current.classList.remove('d-none');
    }
 }
    )      
    
  }

  return (
<>
<form onSubmit={auth} noValidate className="col-xs-12 col-md-6 col-lg-4" style={{minWidth: '300px'}} id='form'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
          <input type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"required
            onChange={(e)=>setUser({...user, email:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>

      <input type="current-password" className="form-control" 
      required onChange={(e)=>setUser({...user, password:e.target.value})} />

        </div>
        <button type="submit" className="btn btn-outline-success btn1">
          Войти</button>
      </form>
    
 <div className="alert alert-success text-center m-3 d-none" role="alert" ref={goodMessage}>
Вы успешно зашли 
</div>


<div className="alert alert-danger text-center m-3 d-none" role="alert" ref={badMessage}>
Вы неправильно ввели адрес электронной почты или пароль
</div> 
</>

  );
}

export default FormEnter;
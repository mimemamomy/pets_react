import Header from "../components/header";
import Footer from "../components/footer";

import "../css/style.css";

import FormRegistration from "../components/formRegistration";

const Registration = () => {
  return ( 
<div className="Registration">
      <Header/>
      <h1>Регистрация</h1>
      <FormRegistration/>
      <Footer/>
    </div>
   );
}
 
export default Registration;

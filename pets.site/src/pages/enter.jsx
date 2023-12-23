import Footer from "../components/footer";
import Header from "../components/header";
import FormEnter from "../components/formEnter";
import "../css/style.css";

 const Enter = () => {
  return (  
    <div className="Enter">
         <Header/>   
      <h1>Вход</h1>
      <FormEnter/>
      <Footer/>
    </div>
  );
 }
  
 export default Enter;

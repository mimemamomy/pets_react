import Footer from "../components/footer";
import Header from "../components/header";
import "../css/style.css";

import FormAddNotices from "../components/formAddNotices";



const AddNotices = () => {
  return ( 
    <div className="AddNotices">
         <Header/>   
      <h1>Добавление объявления</h1>
      <FormAddNotices/>
      <Footer/>
    </div>
   );
}

export default AddNotices;
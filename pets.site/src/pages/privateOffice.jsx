import Footer from "../components/footer";

import UserCard from "../components/userCard";
import Cards from "../components/cards";
import Header from "../components/header";
import "../css/style.css";

const PrivateOffice = () => {
  return ( 
  <div className="PrivateOffice">
         <Header/>  
      <h1>Личный кабинет</h1>
      <UserCard/>
      <h1>Мои объявления</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <Cards/>
      <Cards/>
      </div>
      <Footer/>
    </div>
   );
}
 
export default PrivateOffice;

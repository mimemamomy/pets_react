import Cards from "../components/cards";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import Subscription from "../components/subscription";
import "../css/style.css";

const Index = () => {  
  return ( 
     <div className="Index">
      <Header/>   
      <h1>Найденные животные</h1>   
      <Slider/>
      <h1>Пропавшие животные</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <Cards/>
      <Cards/>
      </div>
      <h1> Подписка на новости</h1>
      <Subscription/>
      <Footer/>
    </div>
   );
}
 
export default Index;

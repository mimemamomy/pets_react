import Footer from "../components/footer";
import Header from "../components/header";
import FormIndividualCard from "../components/formIndividualCard";
import "../css/style.css";

const IndividualCard = () => {
  return ( 
 <div className="IndividualCard">
         <Header/>   
      <h1>Подробная информация о найденных животных</h1>
      <FormIndividualCard/>
      <Footer/>
    </div>
   );
}
 
export default IndividualCard;

import Footer from "../components/footer";
import Header from "../components/header";
import FormAdSearch from "../components/formAdSearch";


const AdSearch = () => {
  return (  
  <div className="AdSearch">
  <Header/>   
<h1>Поиск по объявлениям</h1>
<FormAdSearch/>
<Footer/>
</div> 
);
}
 
export default AdSearch;

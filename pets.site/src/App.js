 import {Routes, Route} from "react-router-dom";

 import AddNotices from './pages/addNotices';
 import Index from './pages/index';
 import AdSearch from './pages/adSearch';
 import Enter from './pages/enter';
 import IndividualCard from './pages/individualCard';
 import PrivateOffice from './pages/privateOffice';
 import Registration from './pages/registration';
 import "./css/style.css";
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.min.js";
 

function App () {
  return ( 
    
    <Routes>
      <Route path={"/"} element={<Index/>}/>
      <Route path={"/addn"} element={<AddNotices/>}/>
      <Route path={"/ads"} element={<AdSearch/>}/>
      <Route path={"/ent"} element={<Enter/>}/>
      <Route path={"/inc"} element={<IndividualCard/>}/>
      <Route path={"/proff"} element={<PrivateOffice/>}/>
      <Route path={"/rgst"} element={<Registration/>}/>
    </Routes>
  
   );
}
 
export default App;

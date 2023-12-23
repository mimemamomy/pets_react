import img from '../images/pr_dog2.jpg';


const Cards = () => {
    return ( 
        <div className="card">
        <img src={img} className="card-img-top" alt="dog" />
        <div className="card-body">
          <h5 className="card-title">Заголовок карточки</h5>
          <p className="card-text">
            Это более длинная карта С вспомогательным текстом ниже в качестве
            естественного перехода к дополнительному контенту. Этот контент
            немного длиннее.
          </p>
        </div>
      </div>  
     );
}
 
export default Cards;
import ava_cat from '../images/ava_cat.jpg';

const UserCard = () => {
    return ( <div className="card private_card mb-5">
    <img src={ava_cat} className="card-img-top" style={{width: '500px', height: '430px'}}  alt="cat"/>
    <ul className="list-group list-group-flush w-100">
      <li className="list-group-item">Имя: Иван</li>
      <li className="list-group-item">Email: ivanpetrov@gmail.com</li>
      <li className="list-group-item">Номер: 89627365424</li>
      <li className="list-group-item">id: 456345</li>
      <li className="list-group-item">Количество дней с момента регистрации: 203</li>
      <li className="list-group-item">Добавленных объявлений: 1</li>
      <li className="list-group-item">Животных нашедших дом: 1</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">изменит номер</a>
      <a href="#" className="card-link">изменит почту</a>
      <a href="#" className="card-link">выйти из аккаунта</a>
    </div>
  </div>
   );
}
 
export default UserCard;
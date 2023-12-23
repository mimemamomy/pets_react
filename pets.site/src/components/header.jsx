import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
    return ( 
      <>

<nav className="navbar navbar-expand-md navbar-dark mb-2">
  <div className="container-fluid">
      <Link to={"index"} className="navbar-brand">
      <img src={logo} className="w-25"></img>
      </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{backgroundColor: "green"}}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li>
          <Link to={"/"} className="nav-link px-2 text-secondary">
           Главная
          </Link>
        </li>
        <li>
          <Link to={"/proff"} className="nav-link px-2 text-white">
            Личный кабинет 
          </Link>
        </li>
        <li>
          <Link to={"/rgst"} className="nav-link px-2 text-white">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to={"/addn"} className="nav-link px-2 text-white">
            Добавить объявление
          </Link>
        </li>
        <li>
          <Link to={"/ads"} className="nav-link px-2 text-white">
            Поиск по объявлениям
          </Link>
        </li>
      </ul>
      <form className="d-flex mb-0" style={{ minWidth: 300 }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Искать
        </button>
      </form>
    </div>
  </div>
</nav>
</>
     );
}
 
export default Header;
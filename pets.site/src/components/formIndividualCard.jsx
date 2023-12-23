import React from 'react'
import cat from "../images/pr_cat1.jpg";

const FormIndividualCard = () => {
  return (
    <div className="card private_card mb-5">
      <img src={cat} className="card-img-top col-xs-12 col-md-6 col-lg-4"  alt="cat"/>
      <ul className="list-group list-group-flush w-100">
        <li className="list-group-item">имя нашедшего: Иван</li>
        <li className="list-group-item">животное: рыжий кот</li>
        <li className="list-group-item">номер для связи: 89627365424</li>
        <li className="list-group-item">id: 456345</li>
        <li className="list-group-item">подробная информация: нашли рыжего кота на балтийской улице, около Бистро кафе</li>
        <li className="list-group-item">район: адмиралтейский</li>
        <li className="list-group-item">дата нахождения: 10.12.23</li>
      </ul>
    </div>
  )
}

export default FormIndividualCard
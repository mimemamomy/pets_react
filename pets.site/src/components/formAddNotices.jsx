import React from 'react'

const FormAddNotices = () => {
  return (
<form className="col-md-6" style={{minWidth: '300px'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Имя</label>
          <input type="Name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">Номер</label>
          <input type="phone" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhoto" className="form-label">Фото</label>
          <input type="file" className="form-control" id="exampleInputPhoto" aria-describedby="photoHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label mb-3">Описание</label>
          <input type="text" className="form-control" id="exampleInputDescription" aria-describedby="descriptionHelp" />
        </div>
        <select className="form-select mb-4" aria-label="район">
          <option selected>Район</option>
          <option value={1}>Адмиралтейский район</option>
          <option value={2}>Василеостровский район</option>
          <option value={3}>Выборгский район</option>
          <option value={4}>Калинский район</option>
          <option value={5}>Кировский район</option>
          <option value={6}>Колпинский район</option>
          <option value={7}>Красногвардейский район</option>
          <option value={8}>Красносельский район</option>
          <option value={9}>Кронштадтский район</option>
          <option value={10}>Курортный район</option>
          <option value={11}>Московский район</option>
          <option value={12}>Невский район</option>
          <option value={13}>Петроградский район</option>
          <option value={14}>Петродворцовый район</option>
          <option value={15}>Приморский район</option>
          <option value={16}>пушкинский район</option>
          <option value={17}>Фрунзенский район</option>
          <option value={18}>Центральный район</option>
        </select>
        <select className="form-select mb-4" aria-label="вид животного">
          <option selected>Вид животного</option>
          <option value={1}>Кот</option>
          <option value={2}>Собака</option>
          <option value={3}>Крыса</option>
          <option value={4}>Выдра</option>
          <option value={5}>Кролик</option>
          <option value={6}>Хомяк</option>
          <option value={7}>Морская свинка</option>
          <option value={8}>Шиншилла</option>
          <option value={9}>Змея</option>
          <option value={10}>Черепаха</option>
          <option value={11}>Паук</option>
          <option value={12}>Птица</option>
          <option value={13}>Капибара</option>
          <option value={14}>Опоссум</option>
        </select>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
        </div>
        <button type="button" className="btn btn-outline-success">
          <a href="../petshop/enter.html">Опубликовать</a></button>
      </form>
  )
}

export default FormAddNotices
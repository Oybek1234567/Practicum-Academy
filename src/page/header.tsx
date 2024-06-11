import { Icons } from "../assets/Icons";
import "../style/header/index.scss"

const HeaderPage = () => {
  return (
      <div className='header'>
          <h1 className='header__title'>Praktikum Academy boshqaruv tizimi</h1>
          <div className='header__products'>
              <button className='header__products_btn'>
                  To’lovni kiritish
              </button>
              <Icons.notification />
              <ul className='header__products_item'>
                  <li className='header__products_item-user'>
                      <Icons.user />
                  </li>
                  <li className='header__products_item-name'>
                      <p>Dilmurod Rahimov</p>
                  </li>
                  <li>
                      <Icons.arrowBottom />
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default HeaderPage

import profile from './../../img/icons/user.svg'
import favorite from './../../img/icons/favorite.svg'
import menu from './../../img/icons/menu.svg'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav-row">
          <a className='logo' href="/">
            <h1>DotaBook</h1>
          </a>
          <ul className='nav-list'>
            <li className='nav-list__item'>
              <a className='nav-list__link' href="/profile">
                <img src={profile} />
              </a>
            </li>
            <li className='nav-list__item'>
              <a className='nav-list__link' href="/favorite">
                <img src={favorite} />
              </a>
            </li>
            <li className='nav-list__item'>
              <a className='nav-list__link' href="/menu">
                <img src={menu} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
import profile from './../../img/icons/user.svg'
import favorite from './../../img/icons/favorite.svg'
import menu from './../../img/icons/menu.svg'
import './header.css'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <a className='logo' href="/">
              <h2>DotaBook</h2>
            </a>
          </div>
          <nav className="header-nav">
            <ul>
              <li>
                <a href="#!">
                  <img src={profile}/>
                </a>
                <a href="#!">
                  <img src={favorite}/>
                </a>
                <a href="#!">
                  <img src={menu}/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
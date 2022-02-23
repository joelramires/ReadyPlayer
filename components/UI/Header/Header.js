import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"

const Header =(props) => {
    return(<header className="top-header">
        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
              <i className ="fas fa-bars"/>
          </div>
          <div className="top-header__search-btn">
              <i className="fas fa-search"/> 
          </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account">
            <img src="https://faces-img.xcdn.link/thumb-lorem-face-1039_thumb.jpg" className="top-header__user-img"/>
            <div className ="top-header__user-name">Viva</div>
        </div>
        <Account/>
        <SearchModal/>
    </header>
)
}

export default Header; 
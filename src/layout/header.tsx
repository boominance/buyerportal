export default function Header(){
    return( 
        <>
<header className="header">
  <div className="header__content">
    <div className="header__logo">
      <a href="/">
        <img src="assets/img/logo-black.svg" alt="" />
      </a>
    </div>
    <form action="#" className="header__search">
      <input
        type="text"
        placeholder="Search stocks, cryptos, and recommenders"
      />
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
        </svg>
      </button>
      <button type="button" className="close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
        </svg>
      </button>
    </form>
    <div className="header__menu">
      <ul className="header__nav">
      <li className="header__nav-item">
          <a href="/" className="header__nav-link">
            Home
          </a>
        </li>
        <li className="header__nav-item">
          <a href="/explore" className="header__nav-link">
            Explore
          </a>
        </li>
        
        <li className="header__nav-item">
          <a href="/help-and-support" className="header__nav-link">
            Help &amp; Support
          </a>
        </li>
       
      </ul>
    </div>
    <div className="header__actions">
  <div className="header__action header__action--search">
    <button className="header__action-btn" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
      </svg>
    </button>
  </div>
  <div className="header__action header__action--signin">
    <a
      className="header__action-btn header__action-btn--signin"
      href="/login"
    >
      <span>Sign in</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
      </svg>
    </a>
  </div>
</div>
    <button className="header__btn" type="button">
      <span />
      <span />
      <span />
    </button>
  </div>
</header>

        </>
    )
}
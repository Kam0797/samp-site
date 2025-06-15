import './Navbar.css'

export default function Navbar() {
  function themeHandler() {
    const theme = document.querySelector("html");
    if(theme.dataset.theme == "light") {
      theme.dataset.theme = "dark";
      document.querySelector(".theme-text").textContent = "LIGHT";
    }
    else {
      theme.dataset.theme = "light";
      document.querySelector(".theme-text").textContent = "DARK";
    }
  }
  return(
    <div className="navbar" >
      <div className="navbar-left">
        <div className="logo" >Wierder.</div>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle-button" onClick={themeHandler}><span className="theme-text"> LIGHT</span> <span className="mode">MODE </span>
        </button>
        <button className="menu-button">
          <div className="menu-burger-bar" />
          <div className="menu-burger-bar" />
          <div className="menu-burger-bar" />
        </button>
      </div>
    </div>
  )
}

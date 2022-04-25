export default function navbar() {
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-sm bg-black">
        <div>
          <img className="img_navbar" src="/logonav.png" alt="logo_nav" />
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 3
            </a>
          </li>
        </ul>
        <button className="btn btn-success" type="submit">
          Administrador
        </button>
      </nav>
    </>
  )
}

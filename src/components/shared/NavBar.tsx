import { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">React Mangas</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/generos" className="nav-link">Generos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/actores" className="nav-link">Actores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cines" className="nav-link">Cines</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/peliculas" className="nav-link">Peliculas</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

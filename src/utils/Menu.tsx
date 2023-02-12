import { Link, Outlet } from "react-router-dom"

export const Menu = () => {
    const claseActiva="active"
  return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand"
        to="/">React Peliculas</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/generos">
                        Generos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculas/filtrar">
                        Filtrar Peliculas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/actores">
                        Actores
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cines">
                        Cines
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculas/crear">
                        Crear Peliculas
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<Outlet/>
</div>
  )
}

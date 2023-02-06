import "./Navbar.css";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="p-3">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/tienda">Tienda</Link>
                    <Link className="header__link" to="/nostros">Nosotros</Link>
                </nav>
            </div>
        </header>
    )
}
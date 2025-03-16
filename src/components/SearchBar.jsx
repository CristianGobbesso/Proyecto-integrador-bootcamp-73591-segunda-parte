import { NavLink } from 'react-router'
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar__logo-container"><NavLink to="/">Codex</NavLink></div>
            <form action="#" className="search-bar__form-container">
                <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                <input type="search" id="busqueda" className="search-bar__form-search" />
                <button type="submit" className="search-bar__form-submit">Buscar</button>
            </form>
            <div className="search-bar__carrito-container"><img src="./icons/shopping-cart.svg"
                alt="imagen carrito de compras" /></div>
            <div className="menu-toogle">
                <label htmlFor="menu" className="menu-toogle__label">
                    <span className="menu-toogle__top-bread"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__bottom-bread"></span>
                </label>
            </div>
        </div>

    )
}

export default SearchBar
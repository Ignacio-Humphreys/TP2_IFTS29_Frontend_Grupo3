import { NavLink, Outlet } from 'react-router-dom';

const navegacion = [
    { ruta: "/", nombre: 'Home' },
    { ruta: "/about", nombre: 'About Us' },
    { ruta: "/API_Studio_Ghibli", nombre: 'API Studio Ghibli' },
    { ruta: "/contact", nombre: 'Contact' }
];

function Layout() {
    return (
        <div className="app">
            <aside className="aside-navbar">
                <div className="aside-logo">
                    Logo web?
                </div>
                <div className="aside-menu">
                    <span className="aside-label">NAVEGACION</span>
                    <nav>
                        { navegacion.map((item) => (
                            <NavLink key={item.ruta} to={item.ruta} end={item.ruta === '/'}>
                                {item.nombre}
                            </NavLink>
                        )) }
                    </nav>
                </div>

                <div className="aside-footer">
                    <p>Studio Ghibli web</p>
                    <span>Desarrollo frontend React</span>
                </div>
            </aside>

            <main className="main-container">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;

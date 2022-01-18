import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="nav-content">
                    <h1>Dark Owl</h1>
                    <div className="nav-links">
                        <div className="col"><span>Sobre</span></div>
                        <div className="col"><span>Login</span></div>
                        <div className="col"><span>Registrar-se</span></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
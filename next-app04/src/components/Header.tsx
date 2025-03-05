import Link from "next/link";

const Header = ({ appTitle }: { appTitle: string }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/"> {appTitle} </Link>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" href="/contacts">Contacts</Link>
                </li>
            </ul>
        </div>    
    </nav>
);

export default Header;
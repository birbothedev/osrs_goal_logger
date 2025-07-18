import { Link } from "react-router-dom";
import "../css/NavBar.css"

export function NavBar(){
    return <nav className="navbar">
        <div className="navBarContainer">
            <Link to="/">Goal Logger</Link>
        </div>
        <div className="navBarLinks">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/playergoalpage" className="nav-link">Player Goal Page</Link>
        </div>
    </nav>
}
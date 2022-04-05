import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";


const Navbar = () => {
  const {theme, toggleTheme} = useTheme()
  return ( 
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <Link style={{textDecoration: "none"}} to="/">
        <span className="navbar-brand mb-0 h1"> Home </span>
        </Link>
        <Link to="users">
        <span className="navbar-brand mb-0 h1"> Users </span>
        </Link>
        <Link to="albums">
        <span className="navbar-brand mb-0 h1">Albums </span>
        </Link>
      <button onClick={toggleTheme}>{theme}</button>
      </div>


    </nav>
   );
}
 
export default Navbar;
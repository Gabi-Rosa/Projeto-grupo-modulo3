import { Outlet, Link } from "react-router-dom";
import Home from '../pages/Home'



const Layout = () => {
  return (
    <>
    <header>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/get">Nossos Livros</Link>
            </li>
            <li>
              <Link to="/post">Emprestar Livros</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      
    </>
  )
};

export default Layout;
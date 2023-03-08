import {Outlet, Link} from "react-router-dom";

const Layout = () => (
  <div>
  <Link to="/">Home Page</Link>
  <Link to="/startup-information">Startup Information</Link>
  <Link to="/search-results">Search Results</Link>
  <Outlet />
  </div>
)

export default Layout;
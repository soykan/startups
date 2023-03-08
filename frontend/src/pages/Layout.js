import {Outlet, Link} from "react-router-dom";

const Layout = () => (
  <div>
    <SiteHeader />

    <Outlet />

    <SiteFooter />
  </div>
)

const SiteHeader = () => (
  <div>
    <span>Site Header:</span>

    <Spacing />

    <Link to="/">Home Page</Link>

    <Spacing />

    <Link to="/startup-information">Startup Information</Link>

    <Spacing />

    <Link to="/search-results">Search Results</Link>

    <Spacing />
  </div>
)


const SiteFooter = () => (
  <div>
    Site Footer
  </div>
)

const Spacing = () => (
  <>&nbsp;&nbsp;&nbsp;</>
)

export default Layout;
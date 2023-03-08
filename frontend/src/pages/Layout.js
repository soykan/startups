import {Outlet, Link} from "react-router-dom";
import SearchForm from "./SearchForm";

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

    <NewLine />
    <NewLine />

    <SearchForm />

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


const NewLine = () => (
  <br />
)



export default Layout;
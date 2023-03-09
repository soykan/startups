import {Outlet, Link} from "react-router-dom";
import SearchForm from "./SearchForm";

const Layout = () => (
  <div>
    <SiteHeader />

    <NewLine/> <NewLine/> <NewLine/> 

    <main class="flex-shrink-0">
      <div class="container">

        <NewLine/> <NewLine/> 

        <Outlet />
      </div>
    </main>
    <SiteFooter />
  </div>
)


// contains fixed navbar
const SiteHeader = () => (
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Startups</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <SearchForm />
      </div>
    </div>
  </nav>
</header>
)


/*
const SiteHeader = () => (
  <div>
    <span>Site Header:</span>

    <Spacing />

    <Link to="/">Home Page</Link>

    <NewLine />
    <NewLine />

    <SearchForm />

    <Spacing />
  </div>
)
*/

const SiteFooter = () => (
  <footer class="footer mt-auto py-3 bg-light fixed-bottom">
    <div class="container">
      <span class="text-muted">Developed with React & Django </span>
    </div>
  </footer>
)


const Spacing = () => (
  <>&nbsp;&nbsp;&nbsp;</>
)


const NewLine = () => (
  <br />
)



export default Layout;
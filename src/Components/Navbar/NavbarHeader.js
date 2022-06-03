import React from 'react';
import { Link } from 'react-router-dom';

function NavbarHeader() {
    
    return (
 
<nav class="navbar navbar-expand-lg navbar-light">

  <div class="container">

    

    <div class="row container">

      <a class="mt-2 mt-lg-0 navbar-brand col-12 col-lg-1" href="#">
        <img
          src="https://i.imgur.com/qY7wvty.png"
          alt="3DArt logo"
          loading="lazy"
          height="45"
        />
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-12 col-lg-5">
        <li class="nav-item col-12 col-lg-3">
          <Link class="nav-link" activeClassName="activeRouteHeader" to="/productos">Tienda</Link>
        </li>
        <li class="nav-item col-12 col-lg-3">
          <a class="nav-link" activeClassName="activeRouteHeader" href="#">Contacto</a>
        </li>
        <li class="nav-item col-12 col-lg-3">
          <a class="nav-link" activeClassName="activeRouteHeader" href="#">Ayuda</a>
        </li>
      </ul>

    </div>

  </div>

</nav>

    );
}

export default NavbarHeader;
import React, { Component } from "react";

class Navegacion extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            Trabajo React
          </a>
          <input
            class="form-control form-control-dark w-100"
            type="text"
            placeholder="Buscar Persona"
            aria-label="Search"
          />
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">
                Iniciar Seccion
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navegacion;

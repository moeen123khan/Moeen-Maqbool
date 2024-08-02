import React from 'react'
import propTypes from 'prop-types'
import Data from './Data'
// import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      


      <nav className={"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}"}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-black" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
         
        </li>

        <li className="nav-item">
          <a className="nav-link text-black" href="#">My Data</a>
     
        </li>
        



      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

<div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar


Navbar.propTypes = {title: propTypes.string.isRequired,
    AboutText: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'set title here',
    AboutText: 'About MoeenQfr'
  };
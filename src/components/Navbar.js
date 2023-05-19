import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> {props.title} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
      </ul>
    </div>

<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" onClick={props.modeprimary} className="btn btn-primary"></button>
    <button type="button" onClick={props.modelight} className="btn btn-light"></button>
    <button type="button" onClick={props.modedark} className="btn btn-dark"></button>                                                 
    <button type="button" onClick={props.modedanger} className="btn btn-danger"></button>
    <button type="button" onClick={props.modesuccess} className="btn btn-success"></button>
  </div>
 
</div>

  </div>
  
</nav>

  );
}

import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbg">
    <div className="container-fluid nav-style">
        <a className="navbar-brand" href="#">SneakerCop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
             <a className="nav-link ">Contacto</a>
            </li>
          </ul>
        </div>
    </div>
    <div id='btn-carrito' className='carrito-style'>
      <button id='carrito'></button>

    </div>
    </nav>
  )
}
let btnCarrito = document.getElementById("carrito");
btnCarrito.innerText="🛒(5)"

export default Navbar
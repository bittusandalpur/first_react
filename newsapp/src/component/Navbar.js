import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark fixed-top  navbar-expand-lg bg-tertiary" data-bs-theme="dark" >
          {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}


          <div class="container-fluid">
            <Link class="navbar-brand" to="#">News Monkey </Link>

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"   >
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/business">business</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/entertainment">entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/general">general</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/health">health</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/science">science</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/sports">sports</Link></li>
                <li className="nav-item"> <Link className="nav-link " aria-current="page" onClick={this.props.onButtonClick} to="/technology">technology.</Link></li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <section className="menu">
      <h1 id="menuTitle">The Pinellas Ale Trail 1</h1>
      <section className="menuLinks">
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/BreweryMap">Brewery Map</Link>
            </li>
            <li>
              <Link to="/AdminPage">Add info</Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  )
}

export default Menu

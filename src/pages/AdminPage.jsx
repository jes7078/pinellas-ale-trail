import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import AddBrewery from './AddBrewery'
import AddStyle from './AddStyle'
import AddBeer from './AddBeer'

const AdminPage = () => {
	return (
		<section>
			<Menu />

			<h1 className="borderedTitle">Admin Page</h1>
			<section className="adminLinks">
				<nav>
					<ul>
						<li>
							<Link to="/AddBrewery">Add, Update, or Delete a Brewery</Link>
						</li>
						<li>
							<Link to="/AddStyle">Add, Update, or Delete a Style</Link>
						</li>
						<li>
							<Link to="/AddBeer">Add, Update, or Delete a Beer</Link>
						</li>
					</ul>
				</nav>
			</section>
		</section>
	)
}

export default AdminPage

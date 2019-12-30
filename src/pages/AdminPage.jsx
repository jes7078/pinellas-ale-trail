import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import AddBrewery from './AddBrewery'
import UpdateBrewery from './UpdateBrewery'
import DeleteBrewery from './DeleteBrewery'
import AddStyle from './AddStyle'
import UpdateStyle from './UpdateStyle'
import DeleteStyle from './DeleteStyle'
import AddBeer from './AddBeer'
import UpdateBeer from './UpdateBeer'
import DeleteBeer from './DeleteBeer'

const AdminPage = () => {
	return (
		<section>
			<Menu />

			<h1>Admin Page</h1>
			<section className="adminLinks">
				<nav>
					<ul>
						<li>
							<Link to="/AddBrewery">Add a Brewery</Link>
						</li>
						<li>
							<Link to="/UpdateBrewery">Update a Brewery</Link>
						</li>
						<li>
							<Link to="/DeleteBrewery">Delete a Brewery</Link>
						</li>
						<li>
							<Link to="/AddStyle">Add a Style</Link>
						</li>
						<li>
							<Link to="/UpdateStyle">Update a Style</Link>
						</li>
						<li>
							<Link to="/DeleteStyle">Delete a Style</Link>
						</li>
						<li>
							<Link to="/AddBeer">Add a Beer</Link>
						</li>
						<li>
							<Link to="/UpdateBeer">Update a Beer</Link>
						</li>
						<li>
							<Link to="/DeleteBeer">Delete a Beer</Link>
						</li>
					</ul>
				</nav>
			</section>
		</section>
	)
}

export default AdminPage

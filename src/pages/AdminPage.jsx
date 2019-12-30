import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import AdminBrewery from './AdminBrewery'

const AdminPage = () => {
	return (
		<section>
			<Menu />

			<h1>Admin Page</h1>
			<h1>Add Update or Delete a:</h1>
			<section className="adminLinks">
				<nav>
					<ul>
						<li>
							<Link to="/AdminBrewery">Brewery</Link>
						</li>
						<li>
							<Link to="/AdminStyle">Style</Link>
						</li>
						<li>
							<Link to="/AdminBeer">Beer</Link>
						</li>
					</ul>
				</nav>
			</section>
		</section>
	)
}

export default AdminPage

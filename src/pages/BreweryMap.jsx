import React, { useState } from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const BreweryMap = () => {
	const [ breweries ] = useState([
		{ name: 'Dunedin Brewery' },
		{ name: 'Anti-Brewery' },
		{ name: '7th Sun Brewery' },
		{ name: 'Caledonia' },
		{ name: 'The Woodright' },
		{ name: 'Cueni Brewing Company' },
		{ name: 'Soggy Bottom Brewery' },
		{ name: 'House of Beer' },
		{ name: 'HOB Brewing Company' }
	])

	return (
		<section className="Breweries">
			<Menu />
			<h1 id="breweriesTitle">Breweries in Dunedin</h1>
			<section className="breweriesList">
				<ul>
					{breweries.map((brewery) => {
						return (
							<li>
								<Link to={`/${brewery.name}`}>{brewery.name}</Link>
							</li>
						)
					})}
				</ul>
			</section>
			<section className="breweriesMap">
				<img id="MapofBreweries" src="/Images/MapofBreweries.png" alt="Dunedin Brewery Map" />
			</section>
		</section>
	)
}

export default BreweryMap

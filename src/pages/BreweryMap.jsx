import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BreweryMap = () => {
	const [ breweries, setBreweries ] = useState([])

	const getBreweries = async () => {
		const resp = await axios.get('https://localhost:5001/api/Breweries')
		setBreweries(resp.data)
	}

	useEffect(() => {
		getBreweries()
	}, [])

	return (
		<section className="Breweries">
			<Menu />

			<h1 id="breweriesTitle">Breweries in Dunedin</h1>

			<section className="breweryList">
				<ul>
					{breweries &&
						breweries.map((brewery) => {
							return (
								<li>
									<Link to={`/${brewery.name}`}>{brewery.name}</Link>
								</li>
							)
						})}
				</ul>
			</section>
			<section className="mapSection">
				<h1 id="mapTitle">Map of Dunedin</h1>
				<img id="map" src="../Images/MapOfBreweries.png" />
			</section>
		</section>
	)
}

export default BreweryMap

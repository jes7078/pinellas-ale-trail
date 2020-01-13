import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AdminBeer = () => {
	const [ beerList, setBeerList ] = useState([])
	const [ beer, setBeer ] = useState({
		id: 0,
		name: '',
		brewery: '',
		style: '',
		description: '',
		beerURL: '',
		ABV: '',
		beerStyleId: 0,
		breweriesid: 0
	})

	const updateBeerObject = (e) => {
		e.persist()
		setBeer((prevBeer) => ({
			...prevBeer,
			[e.target.name]: e.target.value
		}))
	}

	const createBeerList = async () => {
		const resp = await axios.get('https://localhost:5001/api/Beers')
		setBeerList(resp.data)
	}

	const addIt = async (e) => {
		e.preventDefault()
		const resp = await axios.post(`https://localhost:5001/api/Beers`, beer)
		if (resp.statusText === 'OK') {
			window.alert('Beer Added')
		} else {
			window.alert('Error, Beer Not Added')
		}
		createBeerList()
	}

	const updateIt = async (e) => {
		e.preventDefault()
		const resp = await axios.put(`https://localhost:5001/api/Beers/` + beer.id, beer)
		if (resp.statusText === 'OK') {
			window.alert('Beer Changed')
		} else {
			window.alert('Error, beer Not Changed')
		}
		createBeerList()
	}

	const deleteit = async (id) => {
		const resp = await axios.delete('https://localhost:5001/api/Beers/' + id)
		if (resp.statusText === 'OK') {
			window.alert('Beer deleted')
		} else {
			window.alert('Error, beer Not deleted')
		}
		createBeerList()
	}

	const selectIt = (id) => {
		const filterBeer = beerList.filter((bee) => {
			return bee.id === id
		})
		setBeer({
			id: filterBeer[0].id,
			name: filterBeer[0].name,
			brewery: filterBeer[0].brewery,
			style: filterBeer[0].style,
			description: filterBeer[0].description,
			beerURL: filterBeer[0].beerURL,
			ABV: filterBeer[0].abv,
			beerStyleId: filterBeer[0].beerStyleId,
			breweriesid: filterBeer[0].breweriesId
		})
	}

	useEffect(() => {
		createBeerList()
	}, [])

	return (
		<section>
			<Menu />
			<h1 className="addBeerTitle">Add, Update, or Delete a Beer Page</h1>
			<section className="addBeerInputSection">
				<form>
					<label>Name of Beer</label>
					<input
						name="name"
						className="inputBar"
						type="text"
						value={beer.name}
						placeholder="Enter Beer Name"
						onChange={updateBeerObject}
					/>
					<label>Brewery of Beer</label>
					<input
						name="brewery"
						className="inputBar"
						type="text"
						value={beer.brewery}
						placeholder="Enter Brewery Pic URL"
						onChange={updateBeerObject}
					/>
					<label>Beer Style</label>
					<input
						name="style"
						className="inputBar"
						type="text"
						value={beer.style}
						placeholder="Enter Beer Style"
						onChange={updateBeerObject}
					/>
					<label>Beer Description</label>
					<input
						name="description"
						className="inputBar"
						type="text"
						value={beer.description}
						placeholder="Enter Beer Description"
						onChange={updateBeerObject}
					/>
					<label>Beer Pic URL</label>
					<input
						name="beerURL"
						className="inputBar"
						type="text"
						value={beer.beerURL}
						placeholder="Enter beer picture URL"
						onChange={updateBeerObject}
					/>
					<label>Beer ABV</label>
					<input
						name="ABV"
						className="inputBar"
						type="text"
						value={beer.abv}
						placeholder="Enter beer ABV"
						onChange={updateBeerObject}
					/>
					<section className="addBeerButtons">
						<button className="addButton" onClick={addIt}>
							Add
						</button>
						<button className="updateButton" onClick={updateIt}>
							Update
						</button>
						<button className="deleteButton" value={beer.id} onClick={() => deleteit(beer.id)}>
							Delete
						</button>
					</section>
				</form>
			</section>
			<h1 className="currentBeersTitle">Current Beers</h1>
			<section className="addCurrentBeersList">
				<ul>
					{beerList.map((bee, index) => {
						return (
							<section key={index} className="addBeerList">
								<button value={bee.id} onClick={() => selectIt(bee.id)}>
									Select for Update or Delete
								</button>
								<li key={index}>{bee.name}</li>
							</section>
						)
					})}
				</ul>
			</section>
		</section>
	)
}

export default AdminBeer

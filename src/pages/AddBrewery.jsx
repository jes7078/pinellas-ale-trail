import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AddBrewery = () => {
	const [ breweryList, setBreweryList ] = useState([])
	const [ brewery, setBrewery ] = useState({
		id: 0,
		name: '',
		url: '',
		address: '',
		phoneNumber: '',
		website: ''
	})

	const updateBreweryObject = (e) => {
		e.persist()
		setBrewery((prevBrewery) => ({
			...prevBrewery,
			[e.target.name]: e.target.value
		}))
	}

	const createBreweryList = async () => {
		const resp = await axios.get('https://pinellas-ale-trail.herokuapp.com/api/Breweries')
		setBreweryList(resp.data)
	}

	const addIt = async (e) => {
		e.preventDefault()
		const resp = await axios.post(`https://pinellas-ale-trail.herokuapp.com/api/Breweries`, brewery)
		console.log(resp.statusText)
		if (resp.statusText === 'Created') {
			window.alert('Brewery Added')
		} else {
			window.alert('Error, Brewery Not Added')
		}
		createBreweryList()
		setBrewery({
			id: 0,
			name: '',
			url: '',
			address: '',
			phoneNumber: '',
			website: ''
		})
	}

	const updateIt = async (e) => {
		e.preventDefault()
		const resp = await axios.put(`https://pinellas-ale-trail.herokuapp.com/api/Breweries/` + brewery.id, brewery)
		if (resp.statusText === 'OK') {
			window.alert('Brewery Changed')
		} else {
			window.alert('Error, Brewery Not Changed')
		}
		createBreweryList()
		setBrewery({
			id: 0,
			name: '',
			url: '',
			address: '',
			phoneNumber: '',
			website: ''
		})
	}

	const deleteit = async (e, brewery) => {
		e.preventDefault()
		const resp = await axios.delete('https://pinellas-ale-trail.herokuapp.com/api/Breweries/' + brewery.id)
		console.log(resp.statusText)
		if (resp.statusText === 'OK') {
			window.alert('Brewery deleted')
		} else {
			window.alert('Error, Brewery Not deleted')
		}
		createBreweryList()
	}

	const selectIt = (id) => {
		const filterBrewery = breweryList.filter((bre) => {
			return bre.id === id
		})
		setBrewery({
			id: filterBrewery[0].id,
			name: filterBrewery[0].name,
			url: filterBrewery[0].url,
			address: filterBrewery[0].address,
			phoneNumber: filterBrewery[0].phoneNumber,
			website: filterBrewery[0].website
		})
	}

	useEffect(() => {
		createBreweryList()
	}, [])

	return (
		<section>
			<Menu />
			<h1 className="borderedTitle">Add, Update, or Delete a Brewery Page</h1>
			<section className="addBreweryInputSection">
				<form>
					<label>Name of Brewery</label>
					<input
						name="name"
						className="inputBar"
						type="text"
						value={brewery.name}
						placeholder="Enter Brewery Name"
						onChange={updateBreweryObject}
					/>
					<label>Brewery Pic URL</label>
					<input
						name="url"
						className="inputBar"
						type="text"
						value={brewery.url}
						placeholder="Enter Brewery Pic URL"
						onChange={updateBreweryObject}
					/>
					<label>Brewery Address</label>
					<input
						name="address"
						className="inputBar"
						type="text"
						value={brewery.address}
						placeholder="Enter Brewery Address"
						onChange={updateBreweryObject}
					/>
					<label>Brewery Phone Number</label>
					<input
						name="phoneNumber"
						className="inputBar"
						type="text"
						value={brewery.phoneNumber}
						placeholder="Enter Brewery Phone Number"
						onChange={updateBreweryObject}
					/>
					<label>Brewery Website Address</label>
					<input
						name="website"
						className="inputBar"
						type="text"
						value={brewery.website}
						placeholder="Enter Brewery Website Address"
						onChange={updateBreweryObject}
					/>
					<section className="addBreweryButtons">
						<button className="addButton" onClick={addIt}>
							Add
						</button>
						<button className="addButton" onClick={updateIt}>
							Update
						</button>
						<button className="addButton" onClick={(e) => deleteit(e, brewery)}>
							Delete
						</button>
					</section>
				</form>
			</section>
			<h1 className="borderedTitle">Current Breweries</h1>
			<section className="addCurrentBreweriesList">
				<ul>
					{breweryList.map((bre, index) => {
						return (
							<section key={index} className="addBreweryList">
								<button value={bre.id} onClick={() => selectIt(bre.id)}>
									Select for Update or Delete
								</button>
								<li key={index}>{bre.name}</li>
							</section>
						)
					})}
				</ul>
			</section>
		</section>
	)
}

export default AddBrewery

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AddStyle = () => {
	const [ beerStyleList, setBeerStyleList ] = useState([])
	const [ beerStyle, setBeerStyle ] = useState({
		id: 0,
		style: '',
		description: '',
		styleURL: ''
	})

	const updateBeerStyleObject = (e) => {
		e.persist()
		setBeerStyle((prevBeerStyle) => ({
			...prevBeerStyle,
			[e.target.name]: e.target.value
		}))
	}

	const createBeerStyleList = async () => {
		const resp = await axios.get('https://localhost:5001/api/BeerStyle')
		setBeerStyleList(resp.data)
	}

	const addIt = async (e) => {
		e.preventDefault()
		const resp = await axios.post(`https://localhost:5001/api/BeerStyle`, beerStyle)
		if (resp.statusText === 'Created') {
			window.alert('Beer Style Added')
		} else {
			window.alert('Error, Beer Style Not Added')
		}
		createBeerStyleList()
	}

	const updateIt = async (e) => {
		e.preventDefault()
		const resp = await axios.put(`https://localhost:5001/api/BeerStyle/` + beerStyle.id, beerStyle)
		if (resp.statusText === 'OK') {
			window.alert('BeerStyle Changed')
		} else {
			window.alert('Error, BeerStyle Not Changed')
		}
		createBeerStyleList()
	}

	const deleteit = async (e, beerStyle) => {
		e.preventDefault()
		const resp = await axios.delete('https://localhost:5001/api/BeerStyle/' + beerStyle.id)
		if (resp.statusText === 'OK') {
			window.alert('Beer Style deleted')
		} else {
			window.alert('Error, Beer Style Not deleted')
		}
		createBeerStyleList()
	}

	const selectIt = (id) => {
		const filterBeerStyle = beerStyleList.filter((sty) => {
			return sty.id === id
		})
		setBeerStyle({
			id: filterBeerStyle[0].id,
			style: filterBeerStyle[0].style,
			description: filterBeerStyle[0].description,
			styleURL: filterBeerStyle[0].styleURL
		})
	}

	useEffect(() => {
		createBeerStyleList()
	}, [])

	return (
		<section>
			<Menu />
			<h1 className="addStyleTitle">Add, Update, or Delete a Style Page</h1>
			<section className="addStyleInputSection">
				<form>
					<label>Enter Style of Beer</label>
					<input
						name="style"
						className="inputBar"
						type="text"
						value={beerStyle.style}
						placeholder="Style of Beer"
						onChange={updateBeerStyleObject}
					/>
					<label>Enter Style Description</label>
					<input
						name="description"
						className="inputBar"
						type="text"
						value={beerStyle.description}
						placeholder="Description of Style"
						onChange={updateBeerStyleObject}
					/>
					<label>Enter Style URL</label>
					<input
						name="styleURL"
						className="inputBar"
						type="text"
						value={beerStyle.styleURL}
						placeholder="Style Picture URL"
						onChange={updateBeerStyleObject}
					/>
					<section className="addBreweryButtons">
						<button className="addButton" onClick={addIt}>
							Add
						</button>
						<button className="updateButton" onClick={updateIt}>
							Update
						</button>
						<button className="deleteButton" onClick={(e) => deleteit(e, beerStyle)}>
							Delete
						</button>
					</section>
				</form>
			</section>
			<h1 className="currentStylesTitle">Current Styles</h1>
			<section className="addCurrentStylesList">
				<ul>
					{beerStyleList.map((style, index) => {
						return (
							<section key={index} className="addStyleList">
								<button value={style.id} onClick={() => selectIt(style.id)}>
									Select for Update or Delete
								</button>
								<li key={index}>{style.style}</li>
							</section>
						)
					})}
				</ul>
			</section>
		</section>
	)
}

export default AddStyle

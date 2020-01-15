import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'

const HomePage = () => {
	const [ styleNumber, setStyleNumber ] = useState(0)
	const [ localStyleNumber, setLocalStyleNumber ] = useState(0)
	const [ beerNumber, setBeerNumber ] = useState(0)
	const [ style, setStyle ] = useState([])
	const [ beer, setBeer ] = useState([])
	const [ localStyles, setLocalStyles ] = useState([])
	const [ nullStyle ] = useState([
		{
			name: 'There are no local beers',
			breweries: {
				name: 'with this style'
			},
			beerURL:
				'https://previews.123rf.com/images/valeo5/valeo51605/valeo5160500533/56790169-no-beer-sign-isolated-on-white-background-no-alcohol-allowed-sign-.jpg'
		}
	])

	useEffect(() => {
		getStyles()
		getBeers()
	}, [])

	// TIMER FOR FEATURED STYLE
	useEffect(
		() => {
			const interval2 = setInterval(() => {
				if (styleNumber >= style.length - 1) {
					setStyleNumber(0)
				} else {
					setStyleNumber((prev) => prev + 1)
				}
			}, 10000)
			return () => {
				clearInterval(interval2)
			}
		},
		[ styleNumber, style.length ]
	)

	// LOCAL BEERS BASED ON FEATURED STYLE FILTER
	useEffect(
		() => {
			if (style.length && beer.length) {
				const localBeerStyle = beer.filter((beern) => {
					return beern.beerStyle.style === style[styleNumber].style
				})
				setLocalStyleNumber(0)
				if (localBeerStyle[0] !== undefined) {
					setLocalStyles(localBeerStyle)
				} else {
					setLocalStyles(nullStyle)
				}
			}
		},
		[ styleNumber, beer, style, nullStyle ]
	)

	// TIMER FOR LOCAL BEERS BASED ON FEATURED STYLE
	useEffect(
		() => {
			const interval3 = setInterval(() => {
				if (localStyleNumber >= localStyles.length - 1) {
					setLocalStyleNumber(0)
				} else {
					setLocalStyleNumber((prev) => prev + 1)
				}
			}, 3000)
			return () => {
				clearInterval(interval3)
			}
		},
		[ localStyleNumber, localStyles.length, localStyles ]
	)

	const getStyles = async () => {
		const resp = await axios.get('https://localhost:5001/api/BeerStyle')
		setStyle(resp.data)
	}

	const getBeers = async () => {
		const resp = await axios.get('https://localhost:5001/api/Beers')
		setBeer(resp.data)
	}

	return (
		<section className="homePage">
			<Menu />
			<h1 className="borderedTitle">Featured Style</h1>
			<section className="featuredSection">
				<h1 id="styleTitle">{style[styleNumber] && style[styleNumber].style}</h1>
				<p id="styleDescription"> {style[styleNumber] && style[styleNumber].description}</p>
			</section>
			<h1 className="borderedTitle">Featured Style Local Beers</h1>
			<section className="featuredSection">
				<section className="featuredStyleLocalBeersHeader">
					<h1 id="featuredBeer">{localStyles[localStyleNumber] && localStyles[localStyleNumber].name}</h1>
					<h1 id="featuredBrewery">
						{localStyles[localStyleNumber] &&
							localStyles[localStyleNumber].breweries &&
							localStyles[localStyleNumber].breweries.name}
					</h1>
				</section>
				<img
					id="featuredStyleLocalBeersPicture"
					src={localStyles[localStyleNumber] && localStyles[localStyleNumber].beerURL}
					alt="Local Featured Styled Beer"
				/>
			</section>
		</section>
	)
}

export default HomePage

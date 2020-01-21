import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'

const Breweries = props => {
  const [localStyles, setLocalStyles] = useState([])
  const [beerNumber, setBeerNumber] = useState(0)
  const [beer, setBeer] = useState([])

  const [nullStyle] = useState([
    {
      name: 'There are no local beers',
      breweries: {
        name: 'with this style',
      },
      beerURL:
        'https://previews.123rf.com/images/valeo5/valeo51605/valeo5160500533/56790169-no-beer-sign-isolated-on-white-background-no-alcohol-allowed-sign-.jpg',
    },
  ])

  // TIMER FOR RANDOM FEATURED BEER
  useEffect(() => {
    const interval1 = setInterval(() => {
      if (beerNumber >= localStyles.length - 1) {
        setBeerNumber(0)
      } else {
        setBeerNumber(prev => prev + 1)
      }
    }, 5000)
    return () => {
      clearInterval(interval1)
    }
  }, [beerNumber, localStyles.length])

  //LOCAL BEERS BASED ON Brewery Id
  //if start on 3000/2 id is undefined
  useEffect(() => {
    if (beer.length) {
      const breweryBeer = beer.filter(beers => {
        return beers.breweries.id === props.location.state.id
      })
      if (breweryBeer[0] !== undefined) {
        setLocalStyles(breweryBeer)
      } else {
        setLocalStyles(nullStyle)
      }
    }
  }, [beer, nullStyle, props.match.params.name])

  const getBeers = async () => {
    const resp = await axios.get('https://localhost:5001/api/Beers')
    setBeer(resp.data)
  }

  useEffect(() => {
    getBeers()
  }, [])

  return (
    <section className="breweries">
      <Menu />
      <h1 className="borderedTitle">Welcome to {props.match.params.name}</h1>
      {/* Featured Beer Section */}

      <section className="breweryPageBeer">
        <h1 id="featuredBeerTitle">Random Featured Beer</h1>

        <section className="featuredSection">
          <img
            id="breweryBeerPicture"
            src={localStyles[beerNumber] && localStyles[beerNumber].beerURL}
          />
          <section className="breweryPagePictureFooter">
            <h1>
              Name: {localStyles[beerNumber] && localStyles[beerNumber].name}
            </h1>
            <h1>
              Style:{' '}
              {localStyles[beerNumber] &&
                localStyles[beerNumber].beerStyle &&
                localStyles[beerNumber].beerStyle.style}
            </h1>
            <h1>
              Description:{' '}
              {localStyles[beerNumber] && localStyles[beerNumber].description}
            </h1>
            <h1>
              ABV: {localStyles[beerNumber] && localStyles[beerNumber].abv}
            </h1>
          </section>
        </section>
      </section>
      {/* Menu Section */}
      <section className="menuTitle">
        <h1 className="borderedTitle">Current Menu</h1>
      </section>
      <section className="beerListBackground">
        <section className="beerList">
          {localStyles.map((beer, index) => {
            return (
              <ul key={index}>
                <li>{beer && beer.name}</li>
                <li>{beer && beer.beerStyle && beer.beerStyle.style}</li>
                <li>{beer && beer.abv}</li>
                <li>{beer && beer.description}</li>
              </ul>
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default Breweries

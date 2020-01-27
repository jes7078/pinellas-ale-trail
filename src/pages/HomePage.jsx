import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'

import EXIF from 'exif-js'

const HomePage = () => {
  const [styleNumber, setStyleNumber] = useState(0)
  const [localStyleNumber, setLocalStyleNumber] = useState(0)
  const [style, setStyle] = useState([])
  const [beer, setBeer] = useState([])
  const [localStyles, setLocalStyles] = useState([])
  const [nullStyle] = useState([
    {
      name: 'There are no local beers',
      breweries: {
        name: 'with this style',
      },
      beerURL:
        'https://res.cloudinary.com/jes7078/image/upload/v1579122905/BreweryAPIPics/Other/noBeer.jpg',
    },
  ])

  useEffect(() => {
    getStyles()
    getBeers()
  }, [])

  // TIMER FOR FEATURED STYLE
  useEffect(() => {
    const interval2 = setInterval(() => {
      if (styleNumber >= style.length - 1) {
        setStyleNumber(0)
      } else {
        setStyleNumber(Math.floor(Math.random() * style.length))
      }
    }, 15000)
    return () => {
      clearInterval(interval2)
    }
  }, [styleNumber, style.length])

  // LOCAL BEERS BASED ON FEATURED STYLE FILTER
  useEffect(() => {
    if (style.length && beer.length) {
      const localBeerStyle = beer.filter(beern => {
        return beern.beerStyle.style === style[styleNumber].style
      })
      setLocalStyleNumber(0)
      if (localBeerStyle[0] !== undefined) {
        setLocalStyles(localBeerStyle)
      } else {
        setLocalStyles(nullStyle)
      }
    }
  }, [styleNumber, beer, style, nullStyle])

  // TIMER FOR LOCAL BEERS BASED ON FEATURED STYLE
  useEffect(() => {
    const interval3 = setInterval(() => {
      if (localStyleNumber >= localStyles.length - 1) {
        setLocalStyleNumber(0)
      } else {
        setLocalStyleNumber(Math.floor(Math.random() * localStyles.length))
      }
    }, 5000)
    return () => {
      clearInterval(interval3)
    }
  }, [localStyleNumber, localStyles.length, localStyles])

  const getStyles = async () => {
    const resp = await axios.get(
      'https://pinellas-ale-trail.herokuapp.com/api/BeerStyle'
    )
    setStyle(resp.data)
  }

  const getBeers = async () => {
    const resp = await axios.get(
      'https://pinellas-ale-trail.herokuapp.com/api/Beers'
    )
    setBeer(resp.data)
  }

  return (
    <section className="homePage">
      <Menu />
      <h1 className="borderedTitle">Featured Style</h1>
      <section className="featuredSection">
        <h1 id="styleTitle">
          {style[styleNumber] && style[styleNumber].style}
        </h1>
        <p id="styleDescription">
          {' '}
          {style[styleNumber] && style[styleNumber].description}
        </p>
      </section>
      <h1 className="borderedTitle">Featured Style Local Beers</h1>
      <section className="featuredSection">
        <section className="featuredStyleLocalBeersHeader">
          <h1 id="featuredBeer">
            {localStyles[localStyleNumber] &&
              localStyles[localStyleNumber].name}
          </h1>
          <h1 id="featuredBrewery">
            {localStyles[localStyleNumber] &&
              localStyles[localStyleNumber].breweries &&
              localStyles[localStyleNumber].breweries.name}
          </h1>
        </section>
        <img
          id="featuredStyleLocalBeersPicture"
          src={
            localStyles[localStyleNumber] &&
            localStyles[localStyleNumber].beerURL
          }
          alt="Local Featured Styled Beer"
        />
      </section>
    </section>
  )
}

export default HomePage

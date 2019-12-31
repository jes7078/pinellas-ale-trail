import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AdminBeer = () => {
  const [beerList, setBeerList] = useState([])
  const [beerName, setBeerName] = useState('')
  const [breweryName, setBreweryName] = useState('')
  const [beerStyle, setBeerStyle] = useState('')
  const [beerDescription, setBeerDescription] = useState('')
  const [beerURL, setBeerURL] = useState('')
  const [aVB, setAVB] = useState('')

  const enterBeerName = eventData => {
    if (eventData) {
      setBeerName(eventData.target.value)
    }
  }

  const enterBreweryName = eventData => {
    if (eventData) {
      setBreweryName(eventData.target.value)
    }
  }

  const enterBeerStyle = eventData => {
    if (eventData) {
      setBeerStyle(eventData.target.value)
    }
  }

  const enterBeerDescription = eventData => {
    if (eventData) {
      setBeerDescription(eventData.target.value)
    }
  }

  const enterBeerURL = eventData => {
    if (eventData) {
      setBeerURL(eventData.target.value)
    }
  }

  const enterBeerABV = eventData => {
    if (eventData) {
      setAVB(eventData.target.value)
    }
  }

  const submit = async () => {
    let beerInfo = {
      id: 0,
      name: beerName,
      brewery: breweryName,
      style: beerStyle,
      description: beerDescription,
      beerurl: beerURL,
      abv: aVB,
      beerstyleid: 0,
      breweriesid: 0,
    }
    const resp = await axios.post(`https://localhost:5001/api/Beers`, beerInfo)
    if (resp.statusText === 'OK') {
      window.alert('Beer Added')
    } else {
      window.alert('Error, beer Not Added')
    }
    createBeerList()
  }

  const createBeerList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Beers')
    setBeerList(resp.data)
  }

  useEffect(() => {
    createBeerList()
  }, [])

  return (
    <section>
      <Menu />
      <h1>Add a Beer Page</h1>
      <label>Enter Name of Beer</label>
      <input
        className="inputBar"
        type="text"
        value={beerName}
        placeholder="Beer Name"
        onChange={enterBeerName}
      ></input>
      <label>Enter Name of Brewery</label>
      <input
        className="inputBar"
        type="text"
        value={breweryName}
        placeholder="Brewery of Beer"
        onChange={enterBreweryName}
      ></input>
      <label>Enter Style of Beer</label>
      <input
        className="inputBar"
        type="text"
        value={beerStyle}
        placeholder="Style of Beer"
        onChange={enterBeerStyle}
      ></input>
      <label>Enter Beer Description</label>
      <input
        className="inputBar"
        type="text"
        value={beerDescription}
        placeholder="Style Picture URL"
        onChange={enterBeerDescription}
      ></input>
      <label>Enter Beer URL</label>
      <input
        className="inputBar"
        type="text"
        value={beerURL}
        placeholder="Beer URL"
        onChange={enterBeerURL}
      ></input>
      <label>Enter Beer ABV</label>
      <input
        className="inputBar"
        type="text"
        value={aVB}
        placeholder="Beer ABV"
        onChange={enterBeerABV}
      ></input>
      <button className="submitButton" onClick={submit}>
        Submit
      </button>
      <h1> Current Beers</h1>
      <ul>
        {beerList.map((beer, index) => {
          return <li key={index}>{beer.name}</li>
        })}
      </ul>
    </section>
  )
}

export default AdminBeer

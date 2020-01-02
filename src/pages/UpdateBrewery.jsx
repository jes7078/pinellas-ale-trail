import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const UpdateBrewery = () => {
  const [breweryList, setBreweryList] = useState([])
  const [breweryName, setBreweryName] = useState('')
  const [breweryURL, setBreweryURL] = useState('')
  const [breweryAddress, setBreweryAddress] = useState('')
  const [breweryPhoneNumber, setBreweryPhoneNumber] = useState('')
  const [breweryWebsite, setBreweryWebsite] = useState('')
  const [breweryId, setBreweryId] = useState()

  const enterName = eventData => {
    if (eventData) {
      setBreweryName(eventData.target.value)
    }
  }

  const enterBreweryURL = eventData => {
    if (eventData) {
      setBreweryURL(eventData.target.value)
    }
  }

  const enterBreweryAddress = eventData => {
    if (eventData) {
      setBreweryAddress(eventData.target.value)
    }
  }

  const enterBreweryPhoneNumber = eventData => {
    if (eventData) {
      setBreweryPhoneNumber(eventData.target.value)
    }
  }

  const enterBreweryWebsite = eventData => {
    if (eventData) {
      setBreweryWebsite(eventData.target.value)
    }
  }

  const createBreweryList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Breweries')
    setBreweryList(resp.data)
  }

  useEffect(() => {
    createBreweryList()
  }, [])

  const info = id => {
    const filterBrewery = breweryList.filter(bre => {
      return bre.id === id
    })
    setBreweryId(filterBrewery[0].id)
    setBreweryName(filterBrewery[0].name)
    setBreweryURL(filterBrewery[0].url)
    setBreweryAddress(filterBrewery[0].Address)
    setBreweryPhoneNumber(filterBrewery[0].phoneNumber)
    setBreweryWebsite(filterBrewery[0].website)
  }

  const submit = async () => {
    let brewery = {
      id: breweryId,
      name: breweryName,
      url: breweryURL,
      address: breweryAddress,
      phoneNumber: breweryPhoneNumber,
      website: breweryWebsite,
    }
    const resp = await axios.put(
      `https://localhost:5001/api/Breweries/` + breweryId,
      brewery
    )
    if (resp.statusText === 'OK') {
      window.alert('Brewery Changed')
    } else {
      window.alert('Error, Brewery Not Changed')
    }
    createBreweryList()
  }

  return (
    <section>
      <Menu />
      <h1>Update a Brewery Page</h1>
      <input
        className="inputBar"
        type="text"
        value={breweryName}
        placeholder="Enter Brewery Name"
        onChange={enterName}
      ></input>
      <label>Brewery Pic URL</label>
      <input
        className="inputBar"
        type="text"
        value={breweryURL}
        placeholder="Enter Brewery Pic URL"
        onChange={enterBreweryURL}
      ></input>
      <label>Brewery Address</label>
      <input
        className="inputBar"
        type="text"
        value={breweryAddress}
        placeholder="Enter Brewery Address"
        onChange={enterBreweryAddress}
      ></input>
      <label>Brewery Phone Number</label>
      <input
        className="inputBar"
        type="text"
        value={breweryPhoneNumber}
        placeholder="Enter Brewery Phone Number"
        onChange={enterBreweryPhoneNumber}
      ></input>
      <label>Brewery Website Address</label>
      <input
        className="inputBar"
        type="text"
        value={breweryWebsite}
        placeholder="Enter Brewery Website Address"
        onChange={enterBreweryWebsite}
      ></input>

      <button className="submitButton" onClick={submit}>
        Submit
      </button>
      <h1>Highlighted Brewery Info</h1>
      <h2>ID: {breweryId}</h2>
      <h2>Name: {breweryName}</h2>
      <h2>Brewery URL: {breweryURL}</h2>
      <h2>Brewery Address: {breweryAddress}</h2>
      <h2>Brewery Phone Number: {breweryPhoneNumber}</h2>
      <h2>Brewery Website: {breweryWebsite}</h2>
      <h1>Current Breweries</h1>
      <ul>
        {breweryList.map((brewery, index) => {
          return (
            <section key={brewery.id}>
              <li key={index}>{brewery.name}</li>
              <button
                className="infoButton"
                value={brewery.id}
                onClick={() => info(brewery.id)}
              >
                Info
              </button>
            </section>
          )
        })}
      </ul>
    </section>
  )
}

export default UpdateBrewery

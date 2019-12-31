import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AddBrewery = () => {
  const [breweryList, setBreweryList] = useState([])
  const [breweryName, setBreweryName] = useState('')
  const [breweryURL, setBreweryURL] = useState('')
  const [breweryAddress, setBreweryAddress] = useState('')
  const [breweryPhoneNumber, setBreweryPhoneNumber] = useState('')
  const [breweryWebsite, setBreweryWebsite] = useState('')

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

  const submit = async () => {
    let brewery = {
      id: 0,
      name: breweryName,
      url: breweryURL,
      address: breweryAddress,
      phoneNumber: breweryPhoneNumber,
      website: breweryWebsite,
    }
    const resp = await axios.post(
      `https://localhost:5001/api/Breweries`,
      brewery
    )
    if (resp.statusText === 'OK') {
      window.alert('Brewery Added')
    } else {
      window.alert('Error, Brewery Not Added')
    }
    createBreweryList()
  }

  useEffect(() => {
    createBreweryList()
  }, [])
  return (
    <section>
      <Menu />
      <h1>Add a Brewery Page</h1>
      <label>Name of Brewery</label>
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
      <h1>Current Breweries</h1>
      <ul>
        {breweryList.map((brewery, index) => {
          return <li key={index}>{brewery.name}</li>
        })}
      </ul>
    </section>
  )
}

export default AddBrewery

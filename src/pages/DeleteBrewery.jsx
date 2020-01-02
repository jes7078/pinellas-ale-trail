import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const DeleteBrewery = () => {
  const [breweryList, setBreweryList] = useState([])

  const createBreweryList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Breweries')
    setBreweryList(resp.data)
  }

  useEffect(() => {
    createBreweryList()
  }, [])

  const deleteit = async holder => {
    const resp = await axios.delete(
      'https://localhost:5001/api/Breweries/' + holder
    )
    if (resp.statusText === 'OK') {
      window.alert('Brewery deleted')
    } else {
      window.alert('Error, Brewery Not deleted')
    }
    createBreweryList()
  }

  return (
    <section>
      <Menu />
      <h1>Delete a Brewery Page</h1>
      <h1>Current Breweries</h1>
      <ul>
        {breweryList.map((brewery, index) => {
          return (
            <section key={brewery.id}>
              <li key={index}>{brewery.name}</li>
              <button
                className="deleteButton"
                value={brewery.id}
                onClick={() => deleteit(brewery.id)}
              >
                Delete
              </button>
            </section>
          )
        })}
      </ul>
    </section>
  )
}

export default DeleteBrewery

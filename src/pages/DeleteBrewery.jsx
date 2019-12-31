import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const DeleteBrewery = () => {
  let e
  const [breweryList, setBreweryList] = useState([])

  const createBreweryList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Breweries')
    setBreweryList(resp.data)
  }

  useEffect(() => {
    createBreweryList()
  }, [])

  const handleClick = eventData => {
    if (eventData) {
      const bre = breweryList.filter(br => {
        return br.id === eventData
      })
      let holder = parseInt(bre[0].id)
      deleteit(holder)
    }
  }

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
      return <h1>Delete a Brewery Page</h1>
      <h1>Current Breweries</h1>
      <ul>
        {breweryList.map((brewery, index) => {
          return (
            <section>
              <li key={index}>{brewery.name}</li>
              <button
                className="deleteButton"
                value={brewery.id}
                onClick={() => handleClick(brewery.id)}
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const DeleteBeer = () => {
  const [beerList, setBeerList] = useState([])

  const createBeerList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Beers')
    setBeerList(resp.data)
  }

  useEffect(() => {
    createBeerList()
  }, [])

  const deleteit = async holder => {
    const resp = await axios.delete(
      'https://localhost:5001/api/Beers/' + holder
    )
    if (resp.statusText === 'OK') {
      window.alert('Beer deleted')
    } else {
      window.alert('Error, Beer Not deleted')
    }
    createBeerList()
  }

  return (
    <section>
      <Menu />
      return <h1>Delete a Beer page</h1>
      <h1>Current Beers</h1>
      <ul>
        {beerList.map((beer, index) => {
          return (
            <section key={beer.id}>
              <li key={index}>{beer.name}</li>
              <button
                className="deleteButton"
                value={beer.id}
                onClick={() => deleteit(beer.id)}
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

export default DeleteBeer

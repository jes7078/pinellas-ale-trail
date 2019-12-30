import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AdminBeer = () => {
  const [beerList, setBeerList] = useState([])

  const createBeerList = async () => {
    const resp = await axios.get('https://localhost:5001/api/Beers')
    setBeerList(resp.data)
  }

  useEffect(() => {
    createBeerList()
  }, [])

  return (
    <section>
      <h1>Add a Beer Page</h1>
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

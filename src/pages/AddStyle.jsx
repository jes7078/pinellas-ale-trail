import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AddStyle = () => {
  const [beerStyleList, setBeerStyleList] = useState([])

  const createBeerStyleList = async () => {
    const resp = await axios.get('https://localhost:5001/api/BeerStyle')
    setBeerStyleList(resp.data)
  }

  useEffect(() => {
    createBeerStyleList()
  }, [])
  return (
    <section>
      <Menu />
      <h1>Add a Style Page</h1>
      <h1>Current Styles</h1>
      <ul>
        {beerStyleList.map((style, index) => {
          return <li key={index}>{style.style}</li>
        })}
      </ul>
    </section>
  )
}

export default AddStyle

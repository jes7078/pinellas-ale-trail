import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const DeleteStyle = () => {
  const [beerStyleList, setBeerStyleList] = useState([])

  const createBeerStyleList = async () => {
    const resp = await axios.get('https://localhost:5001/api/BeerStyle')
    setBeerStyleList(resp.data)
  }

  useEffect(() => {
    createBeerStyleList()
  }, [])

  const deleteit = async holder => {
    const resp = await axios.delete(
      'https://localhost:5001/api/BeerStyle/' + holder
    )
    if (resp.statusText === 'OK') {
      window.alert('Style deleted')
    } else {
      window.alert('Error, Style Not deleted')
    }
    createBeerStyleList()
  }

  return (
    <section>
      <Menu />
      <h1>Delete a Style Page</h1>
      <h1>Current Styles</h1>
      <ul>
        {beerStyleList.map((style, index) => {
          return (
            <section key={style.id}>
              <li key={index}>{style.style}</li>
              <button
                className="deleteButton"
                value={style.id}
                onClick={() => deleteit(style.id)}
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

export default DeleteStyle

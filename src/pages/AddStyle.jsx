import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

const AddStyle = () => {
  const [beerStyleList, setBeerStyleList] = useState([])
  const [style, setStyle] = useState('')
  const [styleDescription, setStyleDescription] = useState('')
  const [styleURL, setStyleURL] = useState('')

  const enterStyle = eventData => {
    if (eventData) {
      setStyle(eventData.target.value)
    }
  }

  const enterStyleDescription = eventData => {
    if (eventData) {
      setStyleDescription(eventData.target.value)
    }
  }

  const enterStyleURL = eventData => {
    if (eventData) {
      setStyleURL(eventData.target.value)
    }
  }

  const createBeerStyleList = async () => {
    const resp = await axios.get('https://localhost:5001/api/BeerStyle')
    setBeerStyleList(resp.data)
  }

  const submit = async () => {
    let styleInfo = {
      id: 0,
      style: style,
      description: styleDescription,
      styleURL: styleURL,
    }
    const resp = await axios.post(
      `https://localhost:5001/api/BeerStyle`,
      styleInfo
    )
    if (resp.statusText === 'OK') {
      window.alert('Style Added')
    } else {
      window.alert('Error, Style Not Added')
    }
    createBeerStyleList()
  }

  useEffect(() => {
    createBeerStyleList()
  }, [])

  return (
    <section>
      <Menu />
      <h1>Add a Style Page</h1>
      <h1>Current Styles</h1>
      <label>Enter Style of Beer</label>
      <input
        className="inputBar"
        type="text"
        value={style}
        placeholder="Style of Beer"
        onChange={enterStyle}
      ></input>
      <label>Enter Style Description</label>
      <input
        className="inputBar"
        type="text"
        value={styleDescription}
        placeholder="Description of Style"
        onChange={enterStyleDescription}
      ></input>
      <label>Enter Style URL</label>
      <input
        className="inputBar"
        type="text"
        value={styleURL}
        placeholder="Style Picture URL"
        onChange={enterStyleURL}
      ></input>
      <button className="submitButton" onClick={submit}>
        Submit
      </button>
      <ul>
        {beerStyleList.map((style, index) => {
          return <li key={index}>{style.style}</li>
        })}
      </ul>
    </section>
  )
}

export default AddStyle

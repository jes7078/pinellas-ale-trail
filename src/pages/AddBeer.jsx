import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'
import Dropzone from '../components/Dropzone'
import ImageList from '../components/ImageList'
import cuid from 'cuid'
import EXIF from 'exif-js'

const AdminBeer = () => {
  const [breweryList, setBreweryList] = useState([])
  const [beerStyleList, setBeerStyleList] = useState([])
  const [beerList, setBeerList] = useState([])
  const [images, setImages] = useState([])
  const [beerStyleSelector, setBeerStyleSelector] = useState(false)
  const [brewerySelector, setBrewerySelector] = useState(false)
  const [beer, setBeer] = useState({
    id: 0,
    name: '',
    description: '',
    beerURL: '',
    abv: '',
    beerStyleId: '',
    breweriesId: '',
  })

  const updateBeerObject = e => {
    e.persist()
    setBeer(prevBeer => ({
      ...prevBeer,
      [e.target.name]: e.target.valueAsNumber || e.target.value,
    }))
  }

  const selectBreweriesId = (e, brewery) => {
    e.preventDefault()
    setBeer(prevBeer => ({
      ...prevBeer,
      breweriesId: brewery.id,
      breweriesName: brewery.name,
      //looking here--------------------------------------------------------------//
    }))
    setBrewerySelector(true)
  }

  const selectBeerStyleId = (e, sty) => {
    e.preventDefault()
    setBeer(prevBeer => ({
      ...prevBeer,
      beerStyleId: sty.id,
      beerStyleStyle: sty.style,
    }))
    setBeerStyleSelector(true)
  }

  const selectIt = id => {
    const filterBeer = beerList.filter(beer => {
      return beer.id === id
    })
    setBeer({
      id: filterBeer[0].id,
      name: filterBeer[0].name,
      description: filterBeer[0].description,
      beerURL: filterBeer[0].beerURL,
      abv: filterBeer[0].abv,
      beerStyleId: filterBeer[0].beerStyleId,
      breweriesId: filterBeer[0].breweriesId,
      beerStyleStyle: filterBeer[0].beerStyle.style,
      breweriesName: filterBeer[0].breweries.name,
    })
  }

  const createBeerList = async () => {
    const resp = await axios.get(
      'https://pinellas-ale-trail.herokuapp.com/api/Beers'
    )

    setBeerList(resp.data)
  }

  const addIt = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://pinellas-ale-trail.herokuapp.com/api/Beers`,
      beer
    )
    if (resp.statusText === 'Created') {
      window.alert('Beer Added')
    } else {
      window.alert('Error, Beer Not Added')
    }
    createBeerList()
    setBeer({
      id: 0,
      name: '',
      description: '',
      beerURL: '',
      abv: '',
      beerStyleId: '',
      breweriesId: '',
      breweriesName: '',
      beerStyleStyle: '',
    })
    setImages([])
    setBrewerySelector(false)
    setBeerStyleSelector(true)
  }

  const updateIt = async e => {
    e.preventDefault()
    const resp = await axios.put(
      `https://pinellas-ale-trail.herokuapp.com/api/Beers/` + beer.id,
      beer
    )
    if (resp.statusText === 'OK') {
      window.alert('Beer Changed')
    } else {
      window.alert('Error, beer Not Changed')
    }
    createBeerList()
    setBeer({
      id: 0,
      name: '',
      description: '',
      beerURL: '',
      abv: '',
      beerStyleId: '',
      breweriesId: '',
      breweriesName: '',
      beerStyleStyle: '',
    })
    setImages([])
    setBrewerySelector(false)
    setBeerStyleSelector(true)
  }

  const deleteit = async (e, beer) => {
    e.preventDefault()
    const resp = await axios.delete(
      'https://pinellas-ale-trail.herokuapp.com/api/Beers/' + beer.id
    )
    if (resp.statusText === 'OK') {
      window.alert('Beer deleted')
    } else {
      window.alert('Error, beer Not deleted')
    }
    createBeerList()
    setBeer({
      id: 0,
      name: '',
      description: '',
      beerURL: '',
      abv: '',
      beerStyleId: '',
      breweriesId: '',
      breweriesName: '',
      beerStyleStyle: '',
    })
    setImages([])
    setBrewerySelector(false)
    setBeerStyleSelector(true)
  }

  const createBreweryList = async () => {
    const resp = await axios.get(
      'https://pinellas-ale-trail.herokuapp.com/api/Breweries'
    )
    setBreweryList(resp.data)
  }

  const createBeerStyleList = async () => {
    const resp = await axios.get(
      'https://pinellas-ale-trail.herokuapp.com/api/BeerStyle'
    )
    setBeerStyleList(resp.data)
  }

  useEffect(() => {
    createBeerList()
    createBreweryList()
    createBeerStyleList()
  }, [])

  const onDrop = useCallback(acceptedFiles => {
    setImages([])
    acceptedFiles.map(file => {
      const reader = new FileReader()
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ])
      }
      EXIF.getData(file, async function() {
        var orientation = EXIF.getTag(this, 'Orientation')
        console.log({ this: this })
        reader.readAsDataURL(file)
        submit(file, orientation)
        return file
      })
    })
  }, [])

  const submit = async (file, orientation) => {
    const formData = new FormData()
    formData.append('file', file)
    let url = 'https://pinellas-ale-trail.herokuapp.com/api/Image'
    if (orientation) {
      url += `?orientation=${orientation}`
    }
    const resp = await axios.post(url, formData)
    setBeer(prevBeer => ({
      ...prevBeer,
      beerURL: resp.data.image.url,
    }))
  }

  return (
    <section>
      <Menu />
      <h1 className="borderedTitle">Add, Update, or Delete a Beer Page</h1>
      <section className="addBreweryInputSection">
        <form>
          <label>Name of Beer</label>
          <input
            name="name"
            className="inputBar"
            type="text"
            value={beer.name}
            placeholder="Enter Beer Name"
            onChange={updateBeerObject}
          />
          <label>Beer Description</label>
          <input
            name="description"
            className="inputBar"
            type="text"
            value={beer.description}
            placeholder="Enter Beer Description"
            onChange={updateBeerObject}
          />
          <label>Beer ABV</label>
          <input
            name="abv"
            className="inputBar"
            type="text"
            value={beer.abv}
            placeholder="Enter beer ABV"
            onChange={updateBeerObject}
          />
          <label>Beer Style Id of Beer</label>
          <input
            name="beerStyleId"
            className="inputBar"
            type="text"
            step="1"
            value={beer.beerStyleStyle}
            placeholder="Enter Beer Style Id"
            disabled
            // onChange={updateBeerObject}
          />
          <section className="addCurrentBreweriesList">
            {beerStyleSelector ? (
              <section className="reset">
                <button
                  className="resetButton"
                  onClick={() => setBeerStyleSelector(false)}
                >
                  Reset List
                </button>
              </section>
            ) : (
              <ul>
                {beerStyleList.map((sty, index) => {
                  return (
                    <section key={index} className="addBreweryList">
                      <button
                        value={sty.id}
                        onClick={e => selectBeerStyleId(e, sty)}
                      >
                        {sty.style}
                      </button>
                    </section>
                  )
                })}
              </ul>
            )}
          </section>
          {/* //looking here--------------------------------------------------------------// */}
          <label>Brewery Id of Beer</label>
          <input
            name="breweriesId"
            className="inputBar"
            type="text"
            step="1"
            value={beer.breweriesName}
            placeholder="Enter Brewery Id"
            disabled
            // onChange={updateBeerObject}
          />
          <section className="addCurrentBreweriesList">
            {brewerySelector ? (
              <section className="reset">
                <button
                  className="resetButton"
                  onClick={() => setBrewerySelector(false)}
                >
                  Reset List
                </button>
              </section>
            ) : (
              <ul>
                {breweryList.map((bre, index) => {
                  return (
                    <section key={index} className="addBreweryList">
                      <button
                        value={bre.id}
                        onClick={e => selectBreweriesId(e, bre)}
                      >
                        {bre.name}
                      </button>
                    </section>
                  )
                })}
              </ul>
            )}
          </section>
          <label>Beer Pic URL</label>
          <input
            name="beerURL"
            className="inputBar"
            type="text"
            value={beer.beerURL}
            placeholder="Enter beer picture URL"
            onChange={updateBeerObject}
          />
          <section className="onDropSection">
            <h1 className="text-center">Drag and Drop Picture</h1>
            <Dropzone onDrop={onDrop} accept={'image/*'} />
            <ImageList images={images} />
          </section>
          <section className="addBreweryButtons">
            <button className="addButton" onClick={addIt}>
              Add
            </button>
            <button className="addButton" onClick={updateIt}>
              Update
            </button>
            <button className="addButton" onClick={e => deleteit(e, beer)}>
              Delete
            </button>
          </section>
        </form>
      </section>
      <h1 className="borderedTitle">Current Beers</h1>
      <section className="addCurrentBreweriesList">
        <ul>
          {beerList.map((bee, index) => {
            return (
              <section key={index} className="addBreweryList">
                <button value={bee.id} onClick={() => selectIt(bee.id)}>
                  {bee.name}
                </button>
                {/* <li key={index}>{bee.name}</li> */}
              </section>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default AdminBeer

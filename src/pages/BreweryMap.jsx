import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

const BreweryMap = () => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  const [breweries, setBreweries] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 28.017743,
    longitude: -82.787542,
    zoom: 15,
    height: '100%',
    width: '100%',
  })

  const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px',
  }

  const getBreweries = async () => {
    const resp = await axios.get('https://localhost:5001/api/Breweries')
    setBreweries(resp.data)
  }

  useEffect(() => {
    getBreweries()
  }, [])

  return (
    <section className="Breweries">
      <Menu />

      <h1 className="borderedTitle">Breweries in Dunedin</h1>

      <section className="breweryList">
        <ul>
          {breweries &&
            breweries.map(brewery => {
              return (
                <li>
                  <Link
                    to={{
                      pathname: `/${brewery.name}`,
                      state: {
                        id: brewery.id,
                      },
                    }}
                  >
                    {brewery.name}
                  </Link>
                </li>
              )
            })}
        </ul>
      </section>
      <section className="mapSection">
        <h1 className="borderedTitle">Map of Dunedin</h1>
        <section id="map">
          <ReactMapGL
            width="100%"
            height="100%"
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={`mapbox://styles/mapbox/streets-v11`}
          >
            <Marker latitude={28.014042} longitude={-82.787519}>
              <section className="marker">
                <i className="fas fa-map-pin" /> Dunedin Brewery
              </section>
            </Marker>
            <Marker latitude={28.022506} longitude={-82.784759}>
              <section className="marker">
                <i className="fas fa-map-pin" /> Antibrewery
              </section>
            </Marker>
            <Marker latitude={28.015567} longitude={-82.782876}>
              <section className="marker">
                <i className="fas fa-map-pin" /> Soggy Bottom Brewery
              </section>
            </Marker>
            <Marker latitude={28.01384} longitude={-82.789049}>
              <section className="marker">
                <i className="fas fa-map-pin" /> HOB Brewing Company
              </section>
            </Marker>
            <Marker latitude={28.014182} longitude={-82.789635}>
              <section className="marker">
                <i className="fas fa-map-pin" /> HOB
              </section>
            </Marker>
            <Marker latitude={28.015527} longitude={-82.787648}>
              <section className="marker">
                <i className="fas fa-map-pin" /> WoodWright Brewing
              </section>
            </Marker>
            <Marker latitude={28.014715} longitude={-82.788955}>
              <section className="marker">
                <i className="fas fa-map-pin" /> Cueni
              </section>
            </Marker>
            <Marker latitude={28.013422} longitude={-82.784273}>
              <section className="marker">
                <i className="fas fa-map-pin" /> Caledonia Brewing
              </section>
            </Marker>
            <Marker latitude={28.016244} longitude={-82.790038}>
              <section className="marker">
                <i className="fas fa-map-pin" /> 7venth Sun Brewing
              </section>
            </Marker>
            <section className="nav" style={navStyle}>
              <NavigationControl />
            </section>
          </ReactMapGL>
        </section>
      </section>
    </section>
  )
}

export default BreweryMap

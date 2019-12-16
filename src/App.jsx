import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Breweries from './pages/Breweries'
import BreweryMap from './pages/BreweryMap'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/BreweryMap" component={BreweryMap} />
				<Route exact path="/:name" component={Breweries} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App

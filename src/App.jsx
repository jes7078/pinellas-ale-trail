import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Breweries from './pages/Breweries'
import BreweryMap from './pages/BreweryMap'
import AdminPage from './pages/AdminPage'
import AddBrewery from './pages/AddBrewery'
import AddStyle from './pages/AddStyle'
import AddBeer from './pages/AddBeer'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/BreweryMap" component={BreweryMap} />
				<Route exact path="/AdminPage" component={AdminPage} />
				<Route exact path="/AddBrewery" component={AddBrewery} />
				<Route exact path="/AddStyle" component={AddStyle} />
				<Route exact path="/AddBeer" component={AddBeer} />
				<Route exact path="/:name" component={Breweries} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Breweries from './pages/Breweries'
import BreweryMap from './pages/BreweryMap'
import AdminPage from './pages/AdminPage'
import AdminBrewery from './pages/AdminBrewery'
import AdminStyle from './pages/AdminStyle'
import AdminBeer from './pages/AdminBeer'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/BreweryMap" component={BreweryMap} />
				<Route exact path="/AdminPage" component={AdminPage} />
				<Route exact path="/AdminBrewery" component={AdminBrewery} />
				<Route exact path="/AdminStyle" component={AdminStyle} />
				<Route exact path="/AdminBeer" component={AdminBeer} />
				<Route exact path="/:name" component={Breweries} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App

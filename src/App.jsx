import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Breweries from './pages/Breweries'
import BreweryMap from './pages/BreweryMap'
import AdminPage from './pages/AdminPage'
import AddBrewery from './pages/AddBrewery'
import UpdateBrewery from './pages/UpdateBrewery'
import DeleteBrewery from './pages/DeleteBrewery'
import AddStyle from './pages/AddStyle'
import UpdateStyle from './pages/UpdateStyle'
import DeleteStyle from './pages/DeleteStyle'
import AddBeer from './pages/AddBeer'
import UpdateBeer from './pages/UpdateBeer'
import DeleteBeer from './pages/DeleteBeer'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/BreweryMap" component={BreweryMap} />
				<Route exact path="/AdminPage" component={AdminPage} />
				<Route exact path="/AddBrewery" component={AddBrewery} />
				<Route exact path="/UpdateBrewery" component={UpdateBrewery} />
				<Route exact path="/DeleteBrewery" component={DeleteBrewery} />
				<Route exact path="/AddStyle" component={AddStyle} />
				<Route exact path="/UpdateStyle" component={UpdateStyle} />
				<Route exact path="/DeleteStyle" component={DeleteStyle} />
				<Route exact path="/AddBeer" component={AddBeer} />
				<Route exact path="/UpdateBeer" component={UpdateBeer} />
				<Route exact path="/DeleteBeer" component={DeleteBeer} />
				<Route exact path="/:name" component={Breweries} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/app' component={OrphanagesMap} />
				<Route path='/orphanages/create' component={CreateOrphanage} />
				<Route path='/orphanages/:id' component={Orphanage} />
				<Route path='/signin' component={Login} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/forgot-password' component={ForgotPassword} />
				<Route path='/reset-password' component={ResetPassword} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Orfanato from './pages/OrphanagesMap'
import CriarOrfanato from './pages/CreateOrphanage'
import Orfanatao from './pages/Orphanage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={Orfanato} />
                <Route path="/orphanages/create" component={CriarOrfanato} />
                <Route path="/orphanages/:id" component={Orfanatao} />
            </Switch>

        </BrowserRouter>
    );


}
export default Routes
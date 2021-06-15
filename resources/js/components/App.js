import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PasienIndex from './PasienIndex'
import PasienCreate from './PasienCreate'
import PasienShow from './PasienShow'
import PasienEdit from './PasienEdit'

 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                    <Route exact path='/' component={PasienIndex}/>
                    <Route exact path='/create' component={PasienCreate} />
                    <Route path='/pasien/edit/:id' component={PasienEdit} />
                    <Route path='/pasien/:id' component={PasienShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))
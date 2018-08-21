import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import muokkaaKayttajia from './komponentit/muokkaaKayttajia';
import luoUusiKayttaja from './komponentit/luoUusiKayttaja';
import enemmanTietoa from './komponentit/enemmanTietoa';
import './index.css';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/luo' component={luoUusiKayttaja}/>
            <Route path='/enemmantietoa/:id' component={enemmanTietoa}/>
            <Route path='/muokkaa/:id' component={muokkaaKayttajia}/>
        </div>
    </Router>,
    document.getElementById('root')
);


// laitoin tänne react routerin sekä polut
// eka vie näkymään, joka listaa käyttäjät, exact path
// luo vie näkymään, jossa voi luoda uuden henkilön
// enemmantietoa näyttää yksityiskohtia klikatusta kayttajasta, idn perusteella
// enemmantietoa silla sivulla linkki, joka vie muokkaus näkymään

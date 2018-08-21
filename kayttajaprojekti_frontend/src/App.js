import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';


// App luo alkunakymän ja hakee kayttajat tietokannasta näkymään listaksi


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []
        };
    }

    // hakee käyttäjät osoitteesta,  käytetty axiosta, JS kirjasto nodelle ja myös http: pyynnöille,
    // eli hakee datan selaimen APIsta ja automattinen json datan muotoilu
    componentDidMount() {
        axios.get('/contacts')
            .then(res => {
                this.setState({ contacts: res.data }); //tyhjan taulukon tilalle asetetaan haettu data
            });
    }


    render() {
        return (
            <div className="container-fluid">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">Järjestelmä, jossa voi asettaa käyttäjät Marsiin </h3>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />

                    <div class="panel-body">
                        <table class="table table-stripe">
                            <thead>
                            <h4 className="linkki">Lista heeboista</h4>
                            <tr>
                                <th>Nimi</th>
                                <th>Osoite</th>
                                <th>Sähköposti</th>
                                <th>Puh</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.contacts.map(kayttaja => // bodyssa mapataan kayttajat
                            // nimen kohdalla linkki, josta pääsee lisätietoihin
                                <tr>
                                    <td><Link to={`/enemmantietoa/${kayttaja.id}`}>{kayttaja.name}</Link></td>
                                    <td>{kayttaja.address}</td>
                                    <td>{kayttaja.email}</td>
                                    <td>{kayttaja.phone}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                        <h4><Link className="linkki" to="/luo"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true" text-align="center"></span> Lisää uusi heebo</Link></h4>
                </div>
            </div>
        );
    }
}

export default App;
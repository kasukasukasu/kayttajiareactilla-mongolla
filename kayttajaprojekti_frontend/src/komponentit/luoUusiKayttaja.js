import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import '../App.css';

class LuoUusiKayttaja extends Component {

    constructor() {
        super();
        this.state = { name: '',  address: '',  city: '',  phone: '', email: ''};
    }

    // asetetaan Tila
    asetaTila = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    // luodaan uusi kayttaja, kun klikataan
    kunKlikataan = (e) => {
        e.preventDefault();
        const { name, address, city, phone, email } = this.state;
        axios.post('/contacts', { name, address, city, phone, email })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { name, address, city, phone, email } = this.state;
        return (
            <div class="container">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Lisää uusi heebo
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Takaisin heeboihin</Link></h4>
                        <Jumbotron>
                            <form onSubmit={this.kunKlikataan}>
                            <div class="form-group">
                                <label for="isbn">Nimi:</label>
                                <input type="text" class="form-control" name="name" value={name} onChange={this.asetaTila} placeholder="Nimi" />
                            </div>
                            <div class="form-group">
                                <label for="title">Osoite:</label>
                                <input type="text" class="form-control" name="address" value={address} onChange={this.asetaTila} placeholder="Osoite esim. Mars" />
                            </div>
                            <div class="form-group">
                                <label for="author">Kaupunki:</label>
                                <input type="text" class="form-control" name="city" value={city} onChange={this.asetaTila} placeholder="Kaupunki" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Numero:</label>
                                <input type="text" class="form-control" name="phone" value={phone} onChange={this.asetaTila} placeholder="Puh.numero" />
                            </div>
                            <div class="form-group">
                                <label for="publisher">S-posti:</label>
                                <input type="email" class="form-control" name="email" value={email} onChange={this.asetaTila} placeholder="Sähköpostiosoite" />
                            </div>
                            <button type="submit" class="btn">Lisää käyttäjä</button>
                        </form>
                    </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}

export default LuoUusiKayttaja;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import '../App.css';

class MuokkaaKayttajia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: {}
        };
    }

    // hae contacts ja aseta uusi data
    componentDidMount() {
        axios.get('/contacts/'+this.props.match.params.id)
            .then(res => {
                this.setState({ contacts: res.data });
                console.log(this.state.contacts);
            });
    }

        // asetetaan tila
    asetaTila = (e) => {
        const state = this.state.contacts;
        state[e.target.name] = e.target.value;
        this.setState({contacts:state});
    }


    // muokataan data kun klikataan
    kunKlikataan = (e) => {
        e.preventDefault();
        const { name, address, city, postalCode, phone } = this.state.contacts;
        axios.put('/contacts/'+this.props.match.params.id, { name, address, city, postalCode, phone })
            .then((result) => {
                this.props.history.push("/enemmantietoa/"+this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Muokkaa tietoja
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/enemmantietoa/${this.state.contacts.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Käyttäjät</Link></h4>
                       <Jumbotron>
                        <form onSubmit={this.kunKlikataan}>
                            <div class="form-group">
                                <label for="name">Nimi:</label>
                                <input type="text" class="form-control" name="name" value={this.state.contacts.name} onChange={this.asetaTila} placeholder="Nimi" />
                            </div>
                            <div class="form-group">
                                <label for="title">Osoite:</label>
                                <input type="text" class="form-control" name="address" value={this.state.contacts.address} onChange={this.asetaTila} placeholder="Osoite" />
                            </div>
                            <div class="form-group">
                                <label for="author">Kaupunki:</label>
                                <input type="text" class="form-control" name="city" value={this.state.contacts.city} onChange={this.asetaTila} placeholder="Kaupunki" />
                            </div>
                            <div class="form-group">
                                <label for="published_date"> Numero:</label>
                                <input type="text" class="form-control" name="phone" value={this.state.contacts.phone} onChange={this.asetaTila} placeholder="Puh.num" />
                            </div>
                            <div class="form-group">
                                <label for="description">Email:</label>
                                <input type="email" class="form-control" name="email" value={this.state.contacts.email} onChange={this.asetaTila} placeholder="Eemaili" />
                            </div>
                            <button type="submit" className="btn">Päivitä</button>
                        </form>
                       </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}

export default MuokkaaKayttajia;
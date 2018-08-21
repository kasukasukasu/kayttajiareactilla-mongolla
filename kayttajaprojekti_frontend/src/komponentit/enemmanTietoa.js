import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';


// tässä näytetään käyttäjän nykyiset tiedot, mahdollisuus muokata ja poistaa

class EnemmanTietoa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: {}
        };
    }

    // haetaan id:n perusteella tiedot tietokannasta
    componentDidMount() {
        axios.get('/contacts/'+this.props.match.params.id)
            .then(res => {
                this.setState({ contacts: res.data });
                console.log(this.state.contacts);
            });
    }

        // poistofunktio axioksella
    poista(id){
        console.log(id);
        axios.delete('/contacts/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Lisää tietoja heeboista
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link className="linkki" to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Käyttäjät</Link></h4>
                        <dl>
                            <dt>Nimi:</dt>
                            <dd>{this.state.contacts.name}</dd>
                            <dt>Osoite:</dt>
                            <dd>{this.state.contacts.address}</dd>
                            <dt>Kaupunki:</dt>
                            <dd>{this.state.contacts.city}</dd>
                            <dt>Puhnum:</dt>
                            <dd>{this.state.contacts.phone}</dd>
                            <dt>Sähköpostiosoite:</dt>
                            <dd>{this.state.contacts.email}</dd>
                        </dl>
                        <Link to={`/muokkaa/${this.state.contacts.id}`} class="btn">Muokkaa</Link>&nbsp;
                        <button onClick={this.poista.bind(this, this.state.contacts.id)} class="btn">Poista käyttäjä</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnemmanTietoa;
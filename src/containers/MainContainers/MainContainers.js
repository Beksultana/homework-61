import React, {Component} from 'react';
import './MainContainers.css';
import Country from "../../components/Country/Country";
import axios from 'axios';
import InfoCountry from "../../components/InfoCountry/InfoCountry";

class MainContainers extends Component {

    state = {
        country: [],
        countryAlpha: {}
    };

    COUNTRY_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';
    ALPHA_CODE = 'https://restcountries.eu/rest/v2/alpha/';

    componentDidMount(){



        axios.get(this.COUNTRY_URL).then(response => {
            const country = response.data;
            this.setState({country})
        }).catch(function (error) {
            console.log(error);
        })
    };

    componentDidUpdate(){
        console.log('DidUpdate');
    }

    getCountryOne = (code) => {

        axios.get(this.ALPHA_CODE + code).then(response => {
            const countryAlpha = response.data;
            Promise.all(countryAlpha.borders.map(border => axios.get(this.ALPHA_CODE + border)))
                .then(borderResponse => {
                    countryAlpha.borders = borderResponse.map(border => border.data.name);
                    this.setState({countryAlpha})
                })
        }).catch(function (error) {
            console.log(error);
        })
    };

    render() {
        return (
            <div className={'MainContainers'}>

                <div className="countryBlock">
                    {
                        this.state.country.map((country, index) => (
                            <Country
                                countryNames={() => this.getCountryOne(country.alpha3Code)}
                                key={index}
                                country={country.name}
                            />
                        ))
                    }
                </div>
                <div className="infoCounterBlock">
                        <InfoCountry
                            flag={this.state.countryAlpha.flag}
                            counterName={this.state.countryAlpha.name}
                            alphaCode={this.state.countryAlpha.alpha3Code}
                            capital={this.state.countryAlpha.capital}
                            population={this.state.countryAlpha.population}
                            borders={this.state.countryAlpha.borders? this.state.countryAlpha.borders.join(', ') : null}
                        >
                        </InfoCountry>
                </div>
            </div>
        );
    }
}

export default MainContainers;
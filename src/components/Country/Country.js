import React, {Component} from 'react';
import './Country.css';

class Country extends Component {

    render() {
        return (
            <div onClick={this.props.countryNames} className={'Country'}>
                <div className="countryItem">
                    <p>>{this.props.country}</p>
                </div>
            </div>


        );
    }
}

export default Country;
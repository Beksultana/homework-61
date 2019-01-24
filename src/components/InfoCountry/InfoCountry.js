import React from 'react';
import './InfoCountry.css';

const InfoCountry = (props) => {

    return (
        <div className={'InfoCountry'}>
            <div className="CountryNameBlock">
                <img src={props.flag} alt=""/>
                <h1>{props.counterName}</h1>
            </div>
            <div className="InfoBlockCountry">
                <p><strong>Alpha Code 3: </strong> {props.alphaCode}</p>
                <p><strong>Capital: </strong> {props.capital}</p>
                <p> <strong>Population: </strong> {props.population}</p>
                <p> <strong>Borders: </strong> {props.borders}</p>


            </div>
        </div>
    );
};

export default InfoCountry;
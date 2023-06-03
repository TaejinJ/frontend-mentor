import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
export const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        getCountryData();
    }, [])

    const getCountryData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const data = response.data;
            const flag = data.flags;
            console.log(data);
            setCountries(data);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <CountryCard>
            {countries.map(country => (
                <div key={country.cca2}>
                    <img src={country.flags.png} alt={country.name.common} />
                    <h3>{country.name.common}</h3>
                    <h3>Capital:{country.capital}</h3>
                </div>
            ))
            }</CountryCard>
    )
}

const CountryCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 1rem 2rem;
`
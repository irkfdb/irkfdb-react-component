import React from 'react';
import axios from 'axios';
import './styles.css';

export default class IrkfdbComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fact : ''
        }
    }

    componentDidMount() {
        axios.get('https://api.irkfdb.in/facts/random')
            .then(response => {
                const factResponse = response.data.resultSet.data[0].fact;
                this.setState({
                    fact: factResponse
                });
            })
    }

    render() {
        return (
            <div className="irkfd-fact-container">
                <h3 className="irkfdb-header-h3">Rajinikanth Fact:</h3>
                <p className="irkfdb-fact">{this.state.fact}</p>
            </div>
        )
    }
};
import React, { Component } from 'react';
import Weather from './widgets/weather/weather';
import Header from '../../shared/header';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="col-md-4">
                    <Weather></Weather>
                </div>
            </div>
        );
    }
}

export default HomePage;
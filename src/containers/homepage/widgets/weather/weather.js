import React, { Component } from 'react';
import WeatherDetails from './weather-details';

class Weather extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <form action="">
                        <div className="col-md-9">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <WeatherDetails></WeatherDetails>
                </div>
            </div>
        );
    }
}

export default Weather;
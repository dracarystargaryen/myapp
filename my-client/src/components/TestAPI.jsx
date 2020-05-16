import React from "react";



class TestAPI extends React.Component { 
  
    constructor(props) { 
        super(props); 
  
        this.state = { 
            location: " ",
            temp: " ", 
            forecast: " ", 
            condition: " ", 
        }; 
    } 
  
    render() { 
  
        return ( 
            <div className="weather"> 
                <label htmlFor="text">Search Location</label> 
                <br /> 
                <div id="location"> 
                    <input onChange={this.changeValue} 
                           type="text" value={this.state.location}/> 
                </div> 
                <div className="button"> 
                    <button onClick={this.getWeather}> 
                      Begin Search  
                    </button> 
                </div> 
                <div> 
                    <h1>City: {this.state.city}</h1> 
                    <h2>Forecast: {this.state.forecast}</h2> 
                    <h3>Condition: {this.state.weather}</h3> 
                </div> 
            </div> 
        ); 
    } 
  
    changeValue = (event) => { 
  
        this.setState({ 
            location: event.target.value 
        }); 
    } 
  
   getWeather = () => { 
  
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=1b84a1ed8cb49dc76bf20377807fe7d8`) 
            .then(response => response.json()) 
            .then(data => { 
                this.setState({ 
                    city: data.name, 
                    forecast: data.main.temp, 
                    weather: data.weather[0].main 
                }); 
            }); 
  
    } 
} 
 
 
  
class Main extends React.Component { 
  
    constructor(props) { 
  
        super(props); 
  
        this.state = { 
  
        }; 
    } 
  
    render() { 
  
        return ( 
            <div className="main"> 
                <div className="title"> 
                  A Weather Forecast
                </div> 
                <hr /> 
                <TestAPI /> 
            </div> 
        ); 
    } 
}



export default TestAPI;


 


import React from "react";



class TestAPI extends React.Component { 
  
    constructor(props) { 
        super(props); 
  
        this.state = { 
            City: "", 
            Forecast: "", 
            Condition: "", 
        }; 
    } 
  
    render() { 
  
        return ( 
            <div className="weather"> 
                <label htmlFor="text">Search City</label> 
                <br /> 
                <div id="location"> 
                    <input onChange={this.changeValue} 
                           type="text" value={this.state.name}/> 
                </div> 
                <div className="button"> 
                    <button onClick={this.getWeather}> 
                      Begin Search  
                    </button> 
                </div> 
                <div> 
                    <h1>City: {this.state.place}</h1> 
                    <h3>Forecast: {this.state.temp}</h3> 
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
  
    getArt(){
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=1b84a1ed8cb49dc76bf20377807fe7d8`) 
            .then(response => response.json()) 
            .then(data => { 
                this.setState({ 
                    place: data.name, 
                    temp: data.main.temp, 
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


 


import React from "react";


class TestAPI extends React.Component { 
  
    constructor(props) { 
        super(props); 
  
        this.state = { 
            Name: "", 
            Title: "", 
            Year: "", 
        }; 
    } 
  
    render() { 
  
        return ( 
            <div className="Art Search"> 
                <label htmlFor="text">Search for Art</label> 
                <br /> 
                <div id="location"> 
                    <input onChange={this.changeValue} 
                           type="text" value={this.state.name}/> 
                </div> 
                <div className="button"> 
                    <button onClick={this.getArt}> 
                      Begin Search  
                    </button> 
                </div> 
                <div> 
                    <h1>Artist: {this.state.name}</h1> 
                    <h3>Title: {this.state.title}</h3> 
                    <h3>Year: {this.state.year}</h3> 
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
        fetch("https://community-rijksmuseum.p.rapidapi.com/%7Bculture%7D/collection?q=Van%20Gogh", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-rijksmuseum.p.rapidapi.com",
        "x-rapidapi-key": "28d825216amshcb58cc55e40008ep1e23a2jsn61b3d45a3d52"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});
    }
   
    SearchArt(){
        fetch("https://community-rijksmuseum.p.rapidapi.com/%7Bculture%7D/collection?q=Van%20Gogh", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-rijksmuseum.p.rapidapi.com",
        "x-rapidapi-key": "28d825216amshcb58cc55e40008ep1e23a2jsn61b3d45a3d52"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});  


    }

 
} 
  
export default class Home extends React.Component { 
  
    constructor(props) { 
  
        super(props); 
  
        this.state = { 
  
        }; 
    } 
  
    render() { 
  
        return ( 
            <div className="main"> 
                <div className="title"> 
                  Art Searching Index
                </div> 
                <hr /> 
                <TestAPI /> 
            </div> 
        ); 
    } 
} 
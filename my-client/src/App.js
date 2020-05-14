import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, TestAPI, Register, LoginScreen } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/LoginScreen" exact component={() => <LoginScreen />} />
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/testApi" exact component={() => <TestAPI />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/login" exact component={() => <LoginScreen />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

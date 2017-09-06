
import React, { Component } from 'react';
// import { Router, Route, Link, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
import './App.css';
import helpers from "./utils/helper";

// import search from "./subcomponents/search";
// import saved from "./subcomponents/saved";

class Main extends Component {
  
  constructor(props) {
    
        super(props);
    
        this.state = {
          searchTerm: "",
          numResults: "",
          startYear: "",
          endYear: ""
        };
    
        this.setTerm = this.setTerm.bind(this);
      }

      componentDidUpdate(prevProps, prevState) {
        
            if (prevState.searchTerm !== this.state.searchTerm) {
              console.log("UPDATED");
        
              helpers.runQuery(this.state.searchTerm).then((data) => {
                if (data !== this.state.results) {
                  console.log(data);
        
                  this.setState({ results: data });
                }
              });

              helpers.getArticles(this.state.searchTerm).then((data) => {
                if (data !== this.state.results) {
                  console.log(data);
        
                  this.setState({ results: data });
                }
              });

              helpers.saveArticles(this.state.searchTerm).then((data) => {
                if (data !== this.state.results) {
                  console.log(data);
        
                  this.setState({ results: data });
                }
              });

              helpers.deleteArticles(this.state.searchTerm).then((data) => {
                  console.log(data);
        
                  this.setState({ results: data });
                }
              );
            }
          }


          setTerm(term) {
            this.setState({
              searchTerm: term
            });
          }



  render() {

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>


          <div className="jumbotron">
            <h2><strong>New Articles or See what you have?</strong></h2>
            <p><em>Search for articles by clicking the Search button or see you recent searches from the Saved option.</em></p>
            <hr />
            <p>
              <Link to="/search"><button className="btn btn-primary btn-lg">Search</button></Link>
              <Link to="/saved"><button className="btn btn-danger btn-lg">Saved</button></Link>
            </p>
          </div>

          <div className="row">

            {/* This code will dump the correct Child Component */}
            {this.props.children}

          </div>

        </div>


    );
  };
};

export default Main;

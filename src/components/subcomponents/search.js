 import React, { Component } from 'react';
 import helpers from "./../utils/helper";

class search extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            searchTerm: "",
            numArticles: "",
            startYear: "",
            endYear: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        console.log(this.state.searchTerm);

        helpers.runQuery(this.state.numArticles, this.state.searchTerm).then((data) => {
          if (data !== this.state.results) {
            console.log(data);
            this.setState({ results: data });
            helpers.saveArticles(this.state.results);
          } 
        });


        this.setState({ searchTerm: "", numArticles: "", startYear: "", endYear: "", });
      }


    render() {
        return (

            <div className="row">
            <div className="col-sm-12">
              <br></br>
            
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Search Parameters</strong></h3>
                </div>
                <div className="panel-body">
        
                  <form onSubmit={this.handleSubmit}>
          

                    <div className="form-group">
                      <label htmlFor="search">Search Term:</label>
                      <input type="text" className="form-control" id="searchTerm" value={this.state.searchTerm}
                      onChange={this.handleChange}></input>
                    </div>
          
                    <div className="form-group">
                      <label htmlFor="pwd">Number of Records to Retrieve:</label>
                      <select className="form-control" id="numArticles" value={this.state.numArticles}
                      onChange={this.handleChange}>
                        <option value="1">1</option>
                        Setting the option for 5 as default 
                        <option value="5" defaultValue>5</option>
                        <option value="10">10</option>
                      </select>
                    </div>
          
                    <div className="form-group">
                      <label htmlFor="start-year">Start Year (Optional):</label>
                      <input type="text" className="form-control" id="startYear" value={this.state.startYear}
                      onChange={this.handleChange}></input>
                    </div>
          

                    <div className="form-group">
                      <label htmlFor="end-year">End Year (Optional):</label>
                      <input type="text" className="form-control" id="endYear" value={this.state.term}
                      onChange={this.handleChange}></input>
                    </div>
          
                    <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
          
                  </form>
                </div>
              </div>
            </div>
          </div>

        )
    };
};


export default search;
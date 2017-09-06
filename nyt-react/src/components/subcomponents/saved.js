import React, { Component } from 'react';
// import helpers from "./../utils/helper";

class saved extends Component {

    // constructor(props) {
    //     super(props);
    //   }



    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br></br>


                    <div className="panel panel-primary">


                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                            <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
                        </div>


                        <div className="panel-body" id="well-section">

                            {this.props.results}                           




                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default saved;
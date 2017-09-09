// Reference the high-level components
//***MAIN needs to be fixed
import Main from "../components/Main";
import search from "../components/subcomponents/search";
import saved from "../components/subcomponents/saved";

// Include the react-router module
import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Include the Route component for displaying individual routes
// const Routes = router.Route;
// Route.bind(this);

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// const Router = router.Router;
// Router.bind(this);

// Include the IndexRoute (catch-all route)
// const IndexRouter = router.IndexRoute;
// IndexRoute.bind(this);

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blosb/master/docs/guides/Histories.md#hashhistory
// const hashHistories = router.hashHistory;
// hashHistory.bind(this);

// Export the Routes

const routing = (
    <Router>
        <div>
            <Route path="/" component={Main} />

            {/* If user selects Child1 then show the appropriate component*/}
            <Route path="/search" component={search} />

            {/* If user selects Child2 then show the appropriate component*/}
            <Route path="/saved" component={saved} />

        </div>
    </Router>
);

export default routing;

// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Child1 = require("../components/Child1");
var Child2 = require("../components/Child2");
var Grandchild1 = require("../components/Grandchild1");
var Grandchild2 = require("../components/Grandchild2");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="Child1" component={Child1} />
      <Route path="Child2" component={Child2} />
      <Route path="Grandchild1" component={Grandchild1} />
      <Route path="Grandchild2" component={Grandchild2} />
      <IndexRoute component={Child1} />
    </Route>
  </Router>

);

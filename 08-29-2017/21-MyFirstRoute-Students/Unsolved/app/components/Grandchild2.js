var React = require("react");
var router = require("react-router");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Grandchild2 = React.createClass({

  // Here we render the component
    render: function() {
      return (
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Grandchild #2</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
    )
  }
});
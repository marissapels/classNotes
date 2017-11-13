var React = require("react");
var Link = require("react-router").Link;
var Main = React.createClass({
	render: function() {

    return (
      <div className="container">
          <div className="jumbotron">
            <h2><strong>Which Child???</strong></h2>
            <p><em>A journey through the whimsical world of React Routing</em></p>
            <hr />
            <p>
              <Link to="/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></Link>
              <Link to="/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></Link>
            </p>
          </div>

          <div className="row">

            {/* Added this.props.children to dump all of the child components into place */
            }
            {this.props.children}

          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

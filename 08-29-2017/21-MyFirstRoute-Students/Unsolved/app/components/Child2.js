var React = require("react");
var router = require("react-router");
var Link = require("react-router").Link;

var Child2 = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-lg-12">
						<div className="panel panel-danger">
							<div className="panel-heading">
								<h3 className="panel-title">Child #2</h3>
							</div>
							<div className="panel-body">
								Panel content
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
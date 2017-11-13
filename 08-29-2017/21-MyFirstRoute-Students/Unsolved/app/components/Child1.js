var React = require("react");
var router = require("react-router");
var Link = require("react-router").Link;

var Child1 = React.createClass({

  // Here we render the component
  	render: function() {
	    return (
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-12">
	 					<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">Child #1</h3>
							</div>
							<div className="panel-body">
								<p>
									<Link to="/Grandchild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
									<Link to="/Grandchild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
										{this.child.props}
								</p>		
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
import React, { Component } from "react";
class BlockTitle extends Component {
	constructor(props) {super(props);}
	render() {return (<div className="BlockTitle">{this.props.title}</div>);}
}
export default BlockTitle;
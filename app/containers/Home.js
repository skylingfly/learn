import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

import cx from 'classnames'; 

import n from '../base/Base.css';


class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
		        this is page web123
		       <img src={require('../img/lake.jpg')} alt="湖"/>
		    </div>
		)
	}
}

export default Home
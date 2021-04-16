import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//const webpack = require('webpack');
//import Card from './Pos';
//import {Yy} from './Pos';
import Todo from './Todo'
import './styles.css';
import reportWebVitals from './reportWebVitals';
//import bootstrap from 'bootstrap';
//import '@popperjs/core';
//const bootstrap = require('bootstrap');
//const popper = require('popper')
//var events=require('./events.json');
//var card = events.JSON();
//console.log(card);

/*{events.map(function pro(val){
return(<Card 
      key ={Math.random()*10}
	link={val.website }
     name={ val.Name}
     tag={val.tagLine}
 des={val.description }
 img={val.logo}

	    />);	
})}*/ 
ReactDOM.render(<>
	  <Todo
      key={Math.random()*10}
	  /></> ,
	document.getElementById('root'));
	///ReactDOM.render(<><Yy/></>,document.getElementById('ss'));

/// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

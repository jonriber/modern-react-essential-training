import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import PropTypes from 'prop-types';
import Library from './Library';
import FavoriteColorForm from './FavoriteColorForm';
//data list
let bookList = [
  {'title':'the sun','author':'blake','pages':3},
  {'title':'the mars','author':'peter','pages':30},
  {'title':'the venus','author':'ana','pages':300},
  {'title':'the jupter','author':'mary','pages':3000},
]

//render method of DOM -> Reserved
render(
  <section>
    <Library books = {bookList}/>
    <FavoriteColorForm/>
  </section>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

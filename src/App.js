import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

const increment = (dispatch) => {
  dispatch({
    type: 'INCREMENT'
  })
}

const decrement = (dispatch) => {
  dispatch({
    type: 'DECREMENT'
  })
}
const mapStateToProps = (state) => ({ ... state})
function App(props) {
  return (
    <div className="container">
        <div>
          <button className='increment'>-</button> 
              {props.counter}
          <button className='decrement'>+</button>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

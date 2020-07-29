import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'

const mapStateToProps = (state) => ({ ... state})
const mapDispatchToProps = (dispatch) => ({
   increment:  () => {
    dispatch({
      type: 'INCREMENT'
    })
  },
  
   decrement : () => {
    dispatch({
      type: 'DECREMENT'
    })
  }
})
function App(props) {
  return (
    <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0 auto'}}>
          <Button className='decrement' onClick={props.decrement} variant='warning'>-</Button> 
             <small style={{color: '#fff', fontSize: '40px'}}>{props.count}</small> 
          <Button className='increment' onClick={props.increment} variant='warning'>+</Button>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

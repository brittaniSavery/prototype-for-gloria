import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BasicHeader />
        <BasicLayout />
      </div>
    );
  }
}

class BasicHeader extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">[Insert title here]</h1>
        </header>
      </div>
    );
  }
}

class BasicLayout extends Component {
  render() {
    return (
     <Grid>
      <Row>
        <Col xs={6} md={4}>Menu here</Col>
        <Col xs={12} md={8}>Body here</Col>
      </Row>
    </Grid> 
    );
  }
}

export default App;

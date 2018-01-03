import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBox from './searchBox'

class Body extends Component {
    constructor () {
        super();
        this.state = {
            regulations: [],
            current: '',
        };
    }

    componentDidMount() {
        fetch('/regulations')
        .then(res => res.json())
        .then(regulations => this.setState({regulations}));
    }

    handleCurrentRegulationChange(regulation) {
      this.setState({current: regulation});
    }

  
    render() {
  
      return (
       <Grid>
        <Row>
            <Col>
              <SearchBox 
                current={this.state.current}
                regulations={this.state.regulations}
                onCurrentRegChange={this.handleCurrentRegulationChange} />
            </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={2} lg={2} >Menu here</Col>
          <Col xs={12} sm={8} md={10} lg={10}>Body here</Col>
        </Row>
      </Grid> 
      );
    }
  }

  export default Body;
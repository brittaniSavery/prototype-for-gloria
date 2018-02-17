import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBox from './searchBox'

class Body extends Component {
    constructor () {
        super();
        this.state = {
            regulations: [],
            currentReg: '',
            currentSections: [],
            selectedSection: '' 
        };
    }

    componentDidMount() {
        fetch('/regulations')
        .then(res => res.json())
        .then(regulations => this.setState({regulations}));
    }

    handleCurrentRegulationChange(regulation) {
        //changing the current regulation, and emptying the selected section
        this.setState({current: regulation, selectedSection: ''});
        
        //getting the regulation object and parsing out the sections
        fetch('/regulations/'+regulation)
        .then(res => res.json())
        .then(function(reg) {
            //TODO parse sections: building section (backend?)

      });
    }

    handleCurrentSelectionChange() {
      //TODO
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
          <Col xs={12} sm={4} md={2} lg={2} >
            <Menu sections={this.state.currentSections} />
            </Col>
          <Col xs={12} sm={8} md={10} lg={10}>{/*TODO create content section*/}</Col>
        </Row>
      </Grid> 
      );
    }
  }

  export default Body;
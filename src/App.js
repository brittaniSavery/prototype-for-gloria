import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBox from './search-box'
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
  constructor (props) {
    super(props);
    this.state = {xmlUrl: "", xmlObject: ""}; /* url for the xml */
  }

  render() {

    /* parsing the xml */
    var parseString = require('xml2js').parseString;
    var https = require('https');

    https.get('https://www.gpo.gov/fdsys/pkg/CFR-2012-title12-vol8/xml/CFR-2012-title12-vol8-part1002.xml', function(result){
    });
    
    parseString("", function (err, result) {
      console.dir(JSON.stringify(result));
      this.setState({xmlObject: result});
    });

    return (
     <Grid>
      <Row>
          <Col>
            <SearchBox /> {/* SearchBox will need a prop to get current book */}
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

export default App;

import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            regulations: []
        };
    }

    componentDidMount() {
        fetch('/regulations')
        .then(res => res.json())
        .then(regulations => this.setState({regulations}));
    }

    render() {
        return (
        <form>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="Select a book" /*onChange="handleChange"*/>
              <option key="blank" value="">Please select a regulation</option>
              {this.state.regulations.map(regulation => 
                <option key={regulation.id} value={regulation.id}>{regulation.name}</option>
                )}
              </FormControl>
            </FormGroup>
        </form>
        );
    }
}

export default SearchBox;
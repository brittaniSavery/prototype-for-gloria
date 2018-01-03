import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCurrentRegChange(e.target.value)
    }

    render() {
        return (
        <form>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" onChange={this.handleChange} value={this.props.current}>
              <option key="" value="">Please select a regulation</option>
              {this.props.regulations.map(regulation => 
                <option key={regulation.id} value={regulation.id}>{regulation.name}</option>
                )}
              </FormControl>
            </FormGroup>
        </form>
        );
    }
}

export default SearchBox;
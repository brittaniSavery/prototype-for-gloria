import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBox extends Component {
    /* handleChange() {
        // TODO: insert onChange functionality here
        search box option will be 
    } */

    render() {
        return (
        <form>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="Select a book" /*onChange="handleChange"*/>
                <option value="part1002">PART 1002 - EQUAL CREDIT OPPORTUNITY ACT (REGULATION B)</option>
              </FormControl>
            </FormGroup>
        </form>
        );
    }
}

export default SearchBox;
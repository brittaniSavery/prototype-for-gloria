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
                <option value="https://www.gpo.gov/fdsys/pkg/CFR-2012-title12-vol8/xml/CFR-2012-title12-vol8-part1002.xml">PART 1002 - EQUAL CREDIT OPPORTUNITY ACT (REGULATION B)</option>
              </FormControl>
            </FormGroup>
        </form>
        );
    }
}

export default SearchBox;
import React from 'react';
import './FormSearch.css';
import { Form } from 'react-bootstrap';
const FormSearch = ({})=>{
    return(
    <form className='form-search'>
        <Form.Control
            type="text"
            name="search"
            placeholder='Type your search'
            onChange={()=>{}}
        />
    </form>
    )
}

export default FormSearch;
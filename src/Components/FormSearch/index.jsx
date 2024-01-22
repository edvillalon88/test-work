import React from 'react';
import './FormSearch.css';
import { Form } from 'react-bootstrap';
let timeID = false
const FormSearch = ({ onChange })=>{
    const [ value, setValue ] = React.useState('');
    React.useEffect(()=>{
        if(timeID)
            clearTimeout(timeID)
        timeID = setTimeout(()=>{
            onChange(value)
        },500)
    },[value])
    return(
    <form className='form-search'>
        <Form.Control
            type="text"
            name="search"
            placeholder='Type your search'
            value={value}
            onChange={(e)=>{
                setValue(e.target.value)
            }}
        />
    </form>
    )
}

export default FormSearch;
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {
  useHistory
} from "react-router-dom";
import './GridBlog.css';
const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'title',
  text: 'Title'
},{
  dataField: 'date',
  text: 'Date'
}];

const GridBlog = ({ blogs }) =>{
    const navigate = useHistory();
    const handleOnSelect = (data)=>{
        console.log('data', data);
        navigate.push(`/blog/${data.id}`)
    }
    const selectRow = {
        hideSelectColumn: true,
        clickToSelect: true,
        onSelect: handleOnSelect
      };
    return(
        <div className='grid-blogs-content'>
            <BootstrapTable keyField='id' data={ blogs || [] } columns={ columns } selectRow={ selectRow } />
        </div>
    )
}
export default  GridBlog
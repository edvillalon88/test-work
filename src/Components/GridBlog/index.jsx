import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './GridBlog.css';
const products = [ { id: '1', name: 'text 2' }, { id: '2', name: 'text 2'} ];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}];

const GridBlog = ({ blogs }) =>{
    const handleOnSelect = (data)=>{
        console.log('data', data);
    }
    const selectRow = {
        hideSelectColumn: true,
        clickToSelect: true,
        onSelect: handleOnSelect
      };
    return(
        <div className='grid-blogs-content'>
            <BootstrapTable keyField='id' data={ products } columns={ columns } selectRow={ selectRow } />
        </div>
    )
}
export default  GridBlog
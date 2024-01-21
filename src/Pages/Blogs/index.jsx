import React from 'react';
import GridBlog from '../../Components/GridBlog';
import './Blogs.css'
import FormSearch from '../../Components/FormSearch';
import { Breadcrumb, Button } from 'react-bootstrap';
import ModalNew from '../../Components/ModalNew';

const Blogs = ()=>{
    const [ openAddModal, setOpenAddModal ] = React.useState(false);
    return (
    <div className='blogs-container page'>
        <div className='title container'>
            <h3 >Blogs</h3>
        </div>
        <div className='find-new container'>
            <FormSearch />
            <Button variant="primary" onClick={()=>{ setOpenAddModal(true) }} >Add blog</Button>
        </div>
        <div className='table-content container'>
            <GridBlog />
        </div>
        <ModalNew open={openAddModal} />
    </div>
    )
}

export default Blogs;
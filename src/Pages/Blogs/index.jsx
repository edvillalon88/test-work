import React from 'react';
import GridBlog from '../../Components/GridBlog';
import './Blogs.css'
import FormSearch from '../../Components/FormSearch';
import { Breadcrumb, Button } from 'react-bootstrap';
import ModalNew from '../../Components/ModalNew';
import { getBlogsPromise } from '../../Services/BlogService';

const Blogs = props=>{
    const [ openAddModal, setOpenAddModal ] = React.useState(false);
    const [ blogs, setBlogs ] = React.useState([]);
    const [ search, setSearch ] = React.useState(false);
    React.useEffect(()=>{
        getBlogs(search);
    },[search])
    const getBlogs = (searchQuery)=>{
        getBlogsPromise(searchQuery).then((resp)=>{
            setBlogs(resp.data)
        }).catch(e=>{
            console.error(e)
        })
    }
  
    return (
    <div className='blogs-container page'>
        <div className='title container'>
            <h3 >Blogs</h3>
        </div>
        <div className='find-new container'>
            <FormSearch onChange={(data)=>{ setSearch(data) }}/>
            <Button variant="primary" onClick={()=>{ setOpenAddModal(true) }} >Add blog</Button>
        </div>
        <div className='table-content container'>
            <GridBlog blogs={blogs} />
        </div>
        <ModalNew open={openAddModal} onClose={()=>{ setOpenAddModal(false)  }} onSuccesSave={()=>{ getBlogs(); }} />
    </div>
    )
}

export default Blogs;
import React from 'react';
import './Blog.css';
import {
    useParams
  } from "react-router-dom";
import { getBlogPromise } from '../../Services/BlogService';
const Blog = ({}) =>{
    const [ blog, setBlog ] = React.useState({})
    const { idblog } = useParams();
    React.useEffect(()=>{
        getBlogPromise(idblog).then(res=>{
            setBlog(res.data);
        }).catch(e=>{
            console.error(e)
        })
    },[])
    return (
        <div className='blog-container page'>
            <div className='title container'>
                <h3 >Blog detail</h3>
            </div>
            <div className='detail-content container'>
                <div className='item'>
                    <div className='title'>
                        <h5>Title</h5>
                    </div>
                    <div className='content'>
                        { blog.title || ''}
                    </div>
                </div>
                <div className='item'>
                    <div className='title'>
                        <h5>Content</h5>
                    </div>
                    <div className='content'>
                        { blog.content || ''}
                    </div>
                </div>
                <div className='item'>
                    <div className='title'>
                        <h5>Date</h5>
                    </div>
                    <div className='content'>
                        { blog.date ? (new Date(blog.date)).toISOString() : '' }
                    </div>
                </div>
            </div>
    
        </div>
    );
}

export default Blog;
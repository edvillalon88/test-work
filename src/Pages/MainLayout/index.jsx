import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MainLayout.css';
import {
    Switch,
    Link,
    Route
  } from "react-router-dom";
import Home from '../Home';
import Blogs from '../Blogs';
import Blog from '../Blog';
const MainLayout = ({})=>{
    return (
    <div className="app">
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container className='justify-content-between'>
                <Navbar.Brand href="/">Test-work</Navbar.Brand>
                
                <div className="links-content">
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </Container>
        </Navbar>
        <div className='content'>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blogs" component={Blogs} /> 
                <Route path="/blog/:idblog" component={Blog} /> 
                
                
            </Switch>

        </div>
    </div>
  )
}
export default MainLayout;
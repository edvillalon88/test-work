import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home = () =>{
    const history = useHistory();
    return (
    <div className='home'>
        <h1>Your favorites blogs</h1>
        <h3>this is a test react blogs project for you</h3>
        <Button variant="primary" size="lg" onClick={()=>history.push('/blogs')}>Go to blogs</Button>
    </div>
    )
}

export default Home;
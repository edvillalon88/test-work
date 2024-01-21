import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './ModelNew.css';

const ModalNew = ({open})=>{
    const [show, setShow] = React.useState(open);
    const handleClose = () => setShow(false);
    React.useEffect(()=>{
        setShow(open);
    },[open])

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New blog</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <form className='form-add-blog'>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder='Type blog title'
                        onChange={()=>{}}
                    />
                    <Form.Control
                        as="textarea" 
                        rows={4}
                        name="content"
                        placeholder='Type blog content'
                        onChange={()=>{}}
                    />
                    
                </form>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalNew;
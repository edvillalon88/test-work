import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './ModelNew.css';
import { saveBlogPromise } from '../../Services/BlogService';
const newBlog = { title:'', content:'' };
const ModalNew = ({open, onClose, onSuccesSave })=>{
    const [show, setShow] = React.useState(open);
    const [ dataBlog, setDataBlog ] = React.useState(newBlog);
    const formRef = React.useRef(null);
    const handleClose = () => {
        onClose();
        setDataBlog(newBlog);
    }
    React.useEffect(()=>{
        setShow(open);
    },[open])
    const saveBlog = (e)=>{
        e.preventDefault();
        const dataSave = { ...dataBlog, date: (new Date()).getTime() }
        saveBlogPromise(dataSave).then(response=>{
            handleClose();
            onSuccesSave();
        }).catch(e=>{
            console.error(e)
        })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <form  ref={formRef}  className='form-add-blog' onSubmit={(e)=>[saveBlog(e)]} >
                <Modal.Header closeButton>
                    <Modal.Title>New blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className='body-form'>
                
                    <Form.Control
                        type="text"
                        name="title"
                        value={dataBlog.title}
                        required
                        placeholder='Type blog title'
                        onChange={(e)=>{
                            setDataBlog({ ...dataBlog, title: e.target.value })
                        }}
                    />
                    <Form.Control
                        as="textarea" 
                        rows={4}
                        name="content"
                        value={dataBlog.content}
                        required
                        placeholder='Type blog content'
                        onChange={(e)=>{
                            setDataBlog({ ...dataBlog, content: e.target.value })
                        }}
                    />
                    
                
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        Save
                    </Button>
                    
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default ModalNew;
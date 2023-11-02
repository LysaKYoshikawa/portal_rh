import { useState } from "react";
import {Modal, Button} from 'react-bootstrap'
import postService from "../service/postService";



function UpdateModalComponent(props){

    const [isShow, invokeModal] = useState(false)

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [rg, setRg] = useState(props.rg);
    const [cpf, setCpf] = useState(props.cpf);
    const [id, setId] = useState(props.id);
    const [selectFile, setSelectedFile] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData()

        formData.append('id', id);
        formData.append('title',title);
        formData.append('date', date);

        if(selectFile != '' && selectFile.length != 0){
            formData.append('image', selectFile);
        }

        const response = await postService.update(formData);
        if(response.data.success==true){
            alert(response.data.msg)
        }else{
            alert(response.data.msg)
        }

        initModal()
    }

    return(
        <>
        <Button variant="sucess" onClick={initModal}>
            Editar
        </Button>

        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}> 
                <Modal.Title>Update Post</Modal.Title>

            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <input type="text"
                    name='title'
                    placeholder="Altere o nome"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required/>
                    <input type="date"
                    name='data'
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    required/>
                    <br/><br/>
                    <input type="number"
                    name='rg'
                    value={rg}
                    onChange={event => setRg(event.target.value)}
                    required/>
                    <br/><br/>
                    <input type="number"
                    name='cpf'
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    required/>
                    <br/><br/>
                    <input type="file"
                    name='file'
                    onChange={event => setSelectedFile(event.target.files[0])}
                    required/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={initModal}>
                        Close

                    </Button>
                    <Button type="submit" variant="dark">
                        Update

                    </Button>
                </Modal.Footer>

            </form>

            
        </Modal>
        
        </>
    )

}

export default UpdateModalComponent;
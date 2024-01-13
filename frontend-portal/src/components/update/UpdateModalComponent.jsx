import { useState } from "react";
import {Modal, Button} from 'react-bootstrap'
import registerService from "../../service/registerService";



function UpdateModalComponent(props){

    const [isShow, invokeModal] = useState(false)

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const [name, setName] = useState(props.name);
    const [date, setDate] = useState(props.date);
    const [email,setEmail] = useState(props.email);
    const [cel,setCel] = useState(props.cel);
    const [rg, setRg] = useState(props.rg);
    const [cpf, setCpf] = useState(props.cpf);
    const [address,setAddress] = useState(props.address);
    const [city,setCity] = useState(props.city);
    const [state,setState] = useState(props.state);
    const [id, setId] = useState(props.id);
    const [profileLinkedin,setProfileLinkedin] = useState(props.profileLinkedin);
    const [selectFile, setSelectedFile] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData()

        formData.append('id', id);
        formData.append('name',name);
        formData.append('date', date);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        

        if(selectFile !== '' && selectFile.length !== 0){
            formData.append('fileResume', selectFile);
        }

        const response = await registerService.update(formData);
            if(response.data.success===true){
                alert(response.data.msg)
            }else{
                alert(response.data.msg)
            }

        initModal()
    }

    return(
        <>
        <Button variant="warning" onClick={initModal}>
            Editar
        </Button>

        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}> 
                <Modal.Title>Atualizar Cadastro</Modal.Title>

            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <input type="name"
                    name='name'
                    placeholder="Altere o nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="date"
                    name='data'
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="email"
                    name='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='cel'
                    value={cel}
                    onChange={event => setCel(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='rg'
                    value={rg}
                    onChange={event => setRg(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='cpf'
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='address'
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='city'
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='state'
                    value={state}
                    onChange={event => setState(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="text"
                    name='profileLinkedin'
                    value={profileLinkedin}
                    onChange={event => setProfileLinkedin(event.target.value)}
                    className="form-control"
                    required/>
                    <br/>
                    <input type="file"
                    name='fileResume'
                    onChange={event => setSelectedFile(event.target.files[0])}
                    className="form-control"
                    required/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={initModal}>
                        Fechar

                    </Button>
                    <Button type="submit" variant="success">
                        Atualizar

                    </Button>
                </Modal.Footer>

            </form>

            
        </Modal>
        
        </>
    )

}

export default UpdateModalComponent;
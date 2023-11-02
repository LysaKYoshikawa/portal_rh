import { useState } from "react";
import {Modal, Button} from 'react-bootstrap'



function UpdateModalComponent(){

    const [isShow, invokeModal] = useState(false)

    const initModal = () => {
        return invokeModal(!isShow);
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

            <Modal.Body>
                Esse é meu bootstrap modal
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={initModal}>
                    Close

                </Button>
                <Button variant="dark" onClick={initModal}>
                    Update

                </Button>
            </Modal.Footer>
        </Modal>
        
        </>
    )

}

export default UpdateModalComponent;
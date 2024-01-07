import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import registerService from '../service/registerService';
import UpdateModalComponent from "./UpdateModalComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap'

function ShowComponent(){
    

    const[registers, setRegisters] = useState({});

    const fetchRegisters = async()=>{
        try{
            setRegisters(await registerService.getRegisters());
            console.log('retorna isso', setRegisters)
        }catch (error) {
            console.error('Erro ao buscar os registers', error);
        }
        
        
    }

    useEffect(()=>{
        fetchRegisters();

    },[]);

    const deleteRegister = async(id, e)=>{
        try {
            let response =  await registerService.deleteRegister(id);
            console.log('erro do response', response.data);
        
            if(response.data.success === true){
                
                alert(response.data.msg);
                document.getElementById(id).parentElement.parentElement.remove();
                e.target.reset();
                    
            }else{
                alert(response.data.msg);
            }
            
        } catch (error) {
            console.error('Erro ao excluir o register', error);
            
        } 
        
    }

    // const openDocument = (documentFileName) => {
    //     // Adicione um console.log para depurar o caminho do documento
    //     console.log('Caminho do Documento:', documentFileName);

    //     // Construir o URL do documento com base no nome do arquivo
    //     const documentUrl = `${process.env.PUBLIC_URL}/${documentFileName}`;

    //     // Adicione um console.log para depurar o URL final
    //     console.log('URL do Documento:', documentUrl);

    //     // Abrir uma nova janela ou guia para visualizar o documento
    //     window.open(documentUrl, '_blank');
    // }

    const openDocument = (documentFileName) => {

        alert(`Documento salvo no local: ${documentFileName}`);

    }

    return(
        <div class="App">
            
            <h2>Lista de cadastro</h2>
            {
                
                registers.data !== undefined && registers.data.data.length > 0 && (
                    <table class="table" border='1'>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Nome Completo</th>
                                <th scope="col">Data de nascimento</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Celular</th>
                                <th scope="col">RG</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Cargo de Interesse</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Estado</th>
                                <th scope="col">CEP</th>
                                <th scope="col">Habilidades</th>
                                <th scope="col">Perfil do Linkedin</th>
                                <th scope="col">Curriculo atualizado</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Editar</th>

                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                registers.data.data.map(register=>(
                                    <tr key={register._id}>
                                        <th scope="row"> {register.name}
                                        </th>
                                        <td>{register.date}</td>
                                        <td>{register.email}</td>
                                        <td>{register.cel}</td>
                                        <td>{register.rg}</td>
                                        <td>{register.cpf}</td>
                                        <td>{register.office}</td>
                                        <td>{register.address}</td>
                                        <td>{register.city}</td>
                                        <td>{register.state}</td>
                                        <td>{register.zip}</td>
                                        <td>{register.skills}</td>
                                        <td>{register.profileLinkedin}</td>
                                        <td style={{ width: '10%' }}>
                                            <Button variant="primary" onClick={() => openDocument(register.fileResume)}>
                                                Documento
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" id={register._id} 
                                            onClick={(e)=>deleteRegister(register._id,e)}
                                            >Delete</Button>
                                        </td>
                                        <td>
                                            <UpdateModalComponent variant="warning" id={register._id} 
                                            name={register.name}
                                            date={register.date}
                                            email={register.email}
                                            cel={register.cel}
                                            rg={register.rg}
                                            cpf={register.cpf}
                                            address={register.address}
                                            city={register.city}
                                            state={register.state}
                                            zip={register.zip}/>
                                        </td>
                                    </tr>
                                )

                                )
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
};

export default ShowComponent;
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import {useState, useEffect} from 'react';
import registerService from '../../service/registerService';
import UpdateModalComponent from "../update/UpdateModalComponent";
import './ShowComponent.css'; 
import { Button} from 'react-bootstrap'
import { format, isValid } from 'date-fns';
import { useNavigate } from "react-router-dom";

function ShowComponent(){
    const navigate = useNavigate();
    
    const[registers, setRegisters] = useState({});
   
    const fetchRegisters = async () => {
        try {
            const fetchedRegisters = await registerService.getRegisters();
    
            const formattedRegisters = {
                ...fetchedRegisters,
                data: {
                    ...fetchedRegisters.data,
                    data: fetchedRegisters.data.data.map((register) => ({
                        ...register,
                        date: isValid(new Date(register.date)) ? format(new Date(register.date), 'dd/MM/yyyy') : 'Data inválida',
                    })),
                },
            };
    
            setRegisters(formattedRegisters);
    
        } catch (error) {
            console.error('Erro ao buscar os registers', error);
        }
    };        
    
    useEffect(()=>{
        fetchRegisters();

    },[]);

    const deleteRegister = async(id)=>{
        try {
            let response =  await registerService.deleteRegister(id);
            console.log('Retorno:', response.data);
            window.location.href = window.location.href;
        
            if(response.data.success === true){
                document.getElementById(id).parentElement.parentElement.remove();
                
                console.log("deletado?")
                
                    
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
        <div className="App">
            
            <h2 className='title-table'>Lista de cadastro</h2>
            {
                
                registers.data !== undefined && registers.data.data.length > 0 && (
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered m-5" border='1'>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="wide-column text-center">Nome Completo</th>
                                <th scope="col" className="text-center">Data de registro</th>
                                <th scope="col" className="text-center">E-mail</th>
                                <th scope="col" className="text-center">Celular</th>
                                <th scope="col" className="text-center">RG</th>
                                <th scope="col" className="text-center">CPF</th>
                                <th scope="col" className="text-center">Cargo de Interesse</th>
                                <th scope="col" className="text-center">Endereço</th>
                                <th scope="col" className="text-center">Cidade</th>
                                <th scope="col" className="text-center">Estado</th>
                                <th scope="col" className="text-center">CEP</th>
                                <th scope="col" className="text-center">Habilidades</th>
                                <th scope="col" className="text-center">Perfil do Linkedin</th>
                                <th scope="col" className="text-center">Curriculo atualizado</th>
                                <th scope="col" className="text-center">Delete</th>
                                <th scope="col" className="text-center">Editar</th>

                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                registers.data.data.map(register=>(
                                    <tr key={register._id}>
                                        <th scope="row" className="wide-column"> {register.name}
                                        </th>
                                        <td>{register.date}</td>
                                        <td>{register.email}</td>
                                        <td>{register.cel}</td>
                                        <td>{register.rg}</td>
                                        <td>{register.cpf}</td>
                                        <td>{register.office}</td>
                                        <td className="wide-column">{register.address}</td>
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
                                            onClick={(e)=>deleteRegister(register._id)}
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

                    </div>
                    
                )
            }
            <Button className="customer-btn" variant="danger" onClick={() => navigate("/")}>Tela Inicial</Button>

        </div>
    )
};

export default ShowComponent;
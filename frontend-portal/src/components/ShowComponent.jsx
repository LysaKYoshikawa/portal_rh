import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import registerService from '../service/registerService';
import UpdateModalComponent from "./UpdateModalComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Table, Button} from 'react-bootstrap'

function ShowComponent(){
    

    const[registers, setRegisters] = useState({});

    const fetchRegisters = async()=>{
        try{
            setRegisters(await registerService.getRegisters());
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
            }else{
                alert(response.data.msg);
            }
            
        } catch (error) {
            console.error('Erro ao excluir o register', error);
            
        }

       
        
    }

    return(
        <div class="App">
            
            <h2>Lista de cadastro</h2>
            {
                
                registers.data != undefined && registers.data.data.length > 0 && (
                    <table class="table" border='1'>
                        <thead class="thead-dark">
                            <ths cope="col">Nome Completo</ths>
                            <th scope="col">Data de nascimento</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Celular</th>
                            <th scope="col">RG</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">CEP</th>
                            <th scope="col">PDF RG/CPF</th>
                            <th scope="col">Comprovante residencial</th>
                            <th scope="col">Contrato de trabalho</th>
                            <th scope="col">Curriculo atualizado</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Editar</th>
                        </thead>
                        <tbody>
                            {
                                registers.data.data.map(register=>(
                                    <tr>
                                        <td>{register.name}</td>
                                        <td>{register.date}</td>
                                        <td>{register.email}</td>
                                        <td>{register.cel}</td>
                                        <td>{register.rg}</td>
                                        <td>{register.cpf}</td>                                        
                                        <td>{register.address}</td>
                                        <td>{register.city}</td>
                                        <td>{register.state}</td>
                                        <td>{register.zip}</td>
                                        <td style={{width:'10%'}}>{register.fileDoc}</td>
                                        <td style={{width:'10%'}}>{register.fileAddress}</td>
                                        <td style={{width:'10%'}}>{register.fileEmployContract}</td>
                                        <td style={{width:'10%'}}>{register.fileResume}</td>
                                        <td>
                                            <button id={register._id} onClick={(e)=>deleteRegister(register._id,e)}>Delete</button>
                                        </td>
                                        <td>
                                            <UpdateModalComponent id={register._id} 
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
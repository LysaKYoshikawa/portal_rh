import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import './CreateComponent.css'
import registerService from '../../service/registerService';
import { useNavigate } from "react-router-dom";


function CreateComponent(){
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [email,setEmail] = useState('');
    const [cel,setCel] = useState('');
    const [rg,setRg] = useState('');
    const [cpf,setCpf] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zip,setZip] = useState('');

    const [fileDoc,setFileDoc] = useState('');
    const [fileAddress,setFileAddress] = useState('');
    const [fileEmployContract,setFileEmployContract] = useState('');
    const [fileResume,setFileResume] = useState('');
    const [message,setMessage] = useState('');
    const [attachmentsAdded, setAttachmentsAdded] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if (!attachmentsAdded) {
            setMessage('Por favor, adicione os anexos antes de enviar o formulário.');
            return; // Não continue com a submissão do formulário
        }
        const formData = new FormData();

        formData.append('name', name);
        formData.append('date', date);
        formData.append('email',email);
        formData.append('cel', cel)
        formData.append('rg', rg);
        formData.append('cpf', cpf);
        formData.append('fileDoc', fileDoc);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('zip', zip);
        formData.append('fileAddress', fileAddress);
        formData.append('fileEmployContract', fileEmployContract);
        formData.append('fileResume', fileResume);

        const response = await registerService.create(formData);
        if(response.data.success === true){
            setMessage('Funcionario adicionado com sucesso!!!')

        }else{
            setMessage('Deu erro na adição de funcionarios')
        }

        setTimeout(function(){
            setMessage('')
        },2000);
        event.target.reset();

    };

    return (
        <div className="container p-4">
            <div className="d-flex p-4 justify-content-center border border-primary" >
                <div> 
                    <h2 class="formulario"> Dados do candidato</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <label className='label-text mt-3' for="inputName">Nome e Sobrenome </label>
                                <input type="name" placeholder='Coloque seu nome completo' className="form-control" id="inputName" onChange={event => setName(event.target.value)} required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label className='label-text mt-3' for="inputDate">Data de nascimento </label>
                                <input type="date" 
                                placeholder='Coloque seu nome completo' 
                                className="form-control" 
                                id="inputName" 
                                onChange={event => setDate(event.target.value)} 
                                required/>
                            </div>
                            <div className="w-100"></div>
                            <div className="form-group col-md-6">
                                <label className='label-text mt-3' for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail"
                                onChange={event => setEmail(event.target.value)}
                                required/>
                            </div>                            
                            <div className=" form-group col-md-4">
                                <label className='label-text mt-3' for="inputCel">Telefone/Celular</label>
                                <input type="number" className="form-control" id="inputCel"
                                onChange={event => setCel(event.target.value)}
                                required/>
                            </div>
                            <div className="w-100"></div>
                            <div className="form-group col-md-6">
                                <label className='label-text mt-3' for="inputRg">RG</label>
                                <input type="text" className="form-control" id="inputRg"
                                onChange={event => setRg(event.target.value)}
                                placeholder='xxxxxxxx-x'
                                required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label className='label-text mt-3' for="inputCpf">CPF</label>
                                <input type="text" className="form-control" id="inputCpf"
                                onChange={event => setCpf(event.target.value)}
                                placeholder='xxx.xxx.xxx-xx'
                                required/>
                            </div>
                            <div className="w-100"></div>
                                                       
                            <div className="form-group col-md-8">
                                <label className='label-text mt-3' for="inputAddress">Endereço</label>
                                <input type="text" className="form-control" id="inputAddress2" 
                                placeholder="Ex: Rua da contratada numero 01"
                                onChange={event => setAddress(event.target.value)}
                                required/>
                            </div>

                            <div className="form-group col-md-4">
                                <label className='label-text mt-3' for="inputCity">Cidade</label>
                                <input type="text" className="form-control" 
                                onChange={event => setCity(event.target.value)}
                                id="inputCity"/>
                            </div> 

                            <div className="w-100"></div>
                            
                            <div className="form-group col-md-3">
                                <label className='label-text mt-3' for="inputState">Estado</label>
                                <select id="inputState" className="form-control" onChange={event => setState(event.target.value)}>
                                    <option selected>Selecione</option>
                                    <option>AC</option>
                                    <option>AL</option>
                                    <option>AP</option>
                                    <option>AM</option>
                                    <option>BA</option>
                                    <option>CE</option>
                                    <option>DF</option>
                                    <option>ES</option>
                                    <option>GO</option>
                                    <option>MA</option>
                                    <option>MT</option>
                                    <option>MS</option>
                                    <option>MG</option>
                                    <option>PA</option>
                                    <option>PB</option>
                                    <option>PR</option>
                                    <option>PE</option>
                                    <option>PI</option>
                                    <option>RJ</option>
                                    <option>RN</option>
                                    <option>RS</option>
                                    <option>RO</option>
                                    <option>RR</option>
                                    <option>SC</option>
                                    <option>SP</option>
                                    <option>TO</option>

                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label className='label-text mt-3' for="inputZip">CEP</label>
                                <input type="text" className="form-control"  
                                onChange={event => setZip(event.target.value)}
                                id="inputZip"/>
                            </div>
                            <div className="w-100"></div>

                        </div>

                        <form class="col-md-3">
                            <div className="form-group m-3">
                                <label for="fileDoc">Anexo de RG e CPF</label>
                                <input type="file" className="form-control-file mx-2" id="fileDoc"
                                onChange= {event => {setFileDoc(event.target.files[0]); setAttachmentsAdded(true);}}
                                required/>
                            </div>
                            <div className="form-group m-3">
                                <label for="fileAddress">Comprovante de residência</label>
                                <input type="file" className="form-control-file mx-2" id="fileAddress"
                                onChange={event => {setFileAddress(event.target.files[0]); setAttachmentsAdded(true);}}
                                required/>
                            </div>
                            <div className="form-group m-3">
                                <label for="fileEmployContract">Contrato de Trabalho</label>
                                <input type="file" className="form-control-file mx-2" id="fileEmployContract"
                                onChange={event => {setFileEmployContract(event.target.files[0]); setAttachmentsAdded(true);}}
                                required/>
                            </div>
                            <div className="form-group m-3">
                                <label for="fileResume">Curriculo</label>
                                <input type="file" className="form-control-file mx-2" id="fileResume"
                                onChange={event => {setFileResume(event.target.files[0]); setAttachmentsAdded(true);}}
                                required/>
                            </div>
                        </form>

                        <div className='text-center'>
                            <button type="submit" 
                            className="custom-btn btn-lg p-3 m-2"
                            >Enviar</button>

                            <button type='button' 
                            className="btn btn-secondary btn-lg p-3 m-2" 
                            onClick={() => navigate("/show")}>Lista de cadastro</button>
                        </div>

                        

                    </form>

                    
                    <p>{message}</p>
                </div>
                
            </div>
        </div>
    )
};

export default CreateComponent;
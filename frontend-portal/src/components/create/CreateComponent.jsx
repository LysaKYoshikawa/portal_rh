import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import './CreateComponent.css'
import registerService from '../../service/registerService';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

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
    const [office,setOffice] = useState('');
    const [skills,setSkills] = useState('');
    const [profileLinkedin,setProfileLinkedin] = useState('');
    const [fileResume,setFileResume] = useState('');
    const [message,setMessage] = useState('');
    const [attachmentsAdded, setAttachmentsAdded] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if (!attachmentsAdded) {
            setMessage('Por favor, adicione os anexos antes de enviar o formulário.');
            return;
        }
        const formData = new FormData();

        // Verifica se a data já está no formato DD/MM/AAAA
        const formattedDate = /\d{2}\/\d{2}\/\d{4}/.test(date)
        ? date
        : format(new Date(date), 'dd/MM/yyyy');

        formData.append('name', name);
        formData.append('date', formattedDate);
        formData.append('email',email);
        formData.append('cel', cel)
        formData.append('rg', rg);
        formData.append('cpf', cpf);
        formData.append('office', office);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('zip', zip);
        formData.append('skills', skills);
        formData.append('profileLinkedin', profileLinkedin);
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
        <div className="container p-4 my-4 border">
                
                <form onSubmit={handleSubmit}>
                    <div className='row justify-content-center'>
                        <div className="formulario col-md-auto"> Dados do candidato</div>
                    </div>
                    <div className="row">
                        <div className=".col-12 .col-md-8">
                            <label className='label-text mt-3' 
                            htmlFor="inputName"
                            >Nome e Sobrenome </label>
                            <input type="name" 
                            placeholder='Coloque seu nome completo' 
                            className="form-control"  
                            id="inputName" 
                            onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="form-group col-md-4 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputDate"
                            >Data de candidatura </label>
                            <input type="date" 
                            placeholder='Coloque seu nome completo' 
                            className="form-control" 
                            id="inputName" 
                            onChange={event => setDate(event.target.value)} 
                            />
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputEmail"
                            >Email</label>
                            <input type="email" 
                            className="form-control" 
                            id="inputEmail"
                            onChange={event => setEmail(event.target.value)}
                            />
                        </div>                            
                        <div className=" form-group col-md-4 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputCel"
                            >Telefone/Celular</label>
                            <input type="number" 
                            className="form-control" 
                            id="inputCel"
                            onChange={event => setCel(event.target.value)}
                            />
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputRg"
                            >RG</label>
                            <input type="text" 
                            className="form-control" 
                            id="inputRg"
                            onChange={event => setRg(event.target.value)}
                            placeholder='xxxxxxxx-x'
                            />
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputCpf">CPF</label>
                            <input type="text" 
                            className="form-control" 
                            id="inputCpf"
                            onChange={event => setCpf(event.target.value)}
                            placeholder='xxx.xxx.xxx-xx'
                            />
                        </div>
                        <div className="w-100"></div>
                                                    
                        <div className="form-group col-md-8 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputAddress"
                            >Endereço</label>
                            <input type="text" 
                            className="form-control" 
                            id="inputAddress2" 
                            placeholder="Ex: Rua da contratada numero 01"
                            onChange={event => setAddress(event.target.value)}
                            />
                        </div>

                        <div className="form-group col-md-4 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputCity"
                            >Cidade</label>
                            <input type="text" 
                            className="form-control" 
                            onChange={event => setCity(event.target.value)}
                            id="inputCity"/>
                        </div> 

                        <div className="w-100"></div>
                        
                        <div className="form-group col-md-3 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputState"
                            >Estado</label>
                            <select id="inputState" 
                            className="form-control" 
                            onChange={event => setState(event.target.value)}>
                                <option disabled hidden>Selecione</option>
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
                        <div className="form-group col-md-3 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="inputZip"
                            >CEP</label>
                            <input type="text" 
                            className="form-control"  
                            onChange={event => setZip(event.target.value)}
                            id="inputZip"/>
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="office" 
                            className='label-text mt-3'
                            >Cargo de Interesse</label>
                            <input type="text" 
                            className="form-control"
                            onChange= {event => {setOffice(event.target.value);}}
                            id="office"/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="skills"
                            >Habilidades</label>
                            <input type="text" 
                            className="form-control" 
                            id="skills"
                            onChange={event => {setSkills(event.target.value)}}
                            />
                        </div>
                        <div className="w-100"></div>
                        <div className="form-group col-md-4 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="profileLinkedin"
                            >Perfil do Linkedin</label>
                            <input type="text" 
                            className="form-control" 
                            id="profileLinkedin"
                            onChange={event => {setProfileLinkedin(event.target.value);}}
                            />
                        </div>

                    </div>

                    <div className=" input-group col-md-3">
                        <div className="form-group col-md-4 col-sm-12">
                            <label className='label-text mt-3' 
                            htmlFor="fileResume"
                            >Curriculo</label>
                            <input type="file" 
                            className="custom-file-input mt-2" 
                            id="fileResume"
                            onChange={event => {setFileResume(event.target.files[0]); 
                                setAttachmentsAdded(true);}}
                            />
                        </div>
                    </div>

                    <div className='text-center'>
                        <button type="submit" 
                        className="btn btn-secondary btn-lg p-3 m-2 btn-block"
                        >Enviar</button>

                        <button type='button' 
                        className="btn btn-secondary btn-lg p-3 m-2 btn-block" 
                        onClick={() => navigate("/show")}
                        >Lista de cadastro</button>
                    </div>

                    

                </form>

                    
                <p>{message}</p>
                
        </div>
    )
};

export default CreateComponent;
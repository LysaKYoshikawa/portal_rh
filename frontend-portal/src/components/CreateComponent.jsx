import React, {useState} from 'react'
import postService from '../service/postService';

function CreateComponent(){
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [email,setEmail] = useState('');
    const [cel,setCel] = useState('');
    const [rg,setRg] = useState('');
    const [cpf,setCpf] = useState('');
    const [fileDoc,setFileDoc] = useState('');
    const [address,setAddress] = useState('');
    const [fileAddress,setFileAddress] = useState('');
    const [fileEmployContract,setFileEmployContract] = useState('');
    const [fileResume,setFileResume] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('date', date);
        formData.append('email',email);
        formData.append('cel', cel)
        formData.append('rg', rg);
        formData.append('cpf', cpf);
        formData.append('fileDoc', fileDoc);
        formData.append('address', address);
        formData.append('fileAddress', fileAddress);
        formData.append('fileEmployContract', fileEmployContract);
        formData.append('fileResume', fileResume);

        const response = await postService.create(formData);
        if(response.data.success == true){
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
        <div>
            <h2> Seu formulario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    placeholder='Seu nome'
                    onChange={event => setName(event.target.value)}
                    required/>
                <br/><br/>
                <input type="date"
                    name="date"
                    onChange={event => setDate(event.target.value)}
                    required/>
                <br/><br/>
                <input type="text"
                    name="email"
                    placeholder='coloque seu email'
                    onChange={event => setEmail(event.target.value)}
                    required/>
                <br/><br/>
                <input type="number"
                    name="celular"
                    placeholder='coloque seu numero'
                    onChange={event => setCel(event.target.value)}
                    required/>
                <br/><br/>
                <input type="number"
                    name="rg"
                    placeholder='Coloque seu RG sem ponto'
                    onChange={event => setRg(event.target.value)}
                    required/>
                <br/><br/>
                <input type="number"
                    name="cpf"
                    placeholder='Coloque seu cpf sem ponto'
                    onChange={event => setCpf(event.target.value)}
                    required/>
                <br/><br/>
                <input type="file"
                    name="fileDoc"
                    onChange={event => setFileDoc(event.target.files[0])}
                    required/>
                <br/><br/>
                <input type="text"
                    name="address"
                    placeholder='Insira seu endereço'
                    onChange={event => setAddress(event.target.value)}
                    required/>
                <br/><br/>
                <input type="file"
                    name="fileAddress"
                    onChange={event => setFileAddress(event.target.files[0])}
                    required/>
                <br/><br/>
                <input type="file"
                    name="fileEmployContract"
                    onChange={event => setFileEmployContract(event.target.files[0])}
                    required/>
                <br/><br/>
                <input type="file"
                    name="fileResume"
                    onChange={event => setFileResume(event.target.files[0])}
                    required/>
                <br/><br/>
                <button>Enviar</button>

            </form>
            <p>{message}</p>
        </div>
    )
};

export default CreateComponent;
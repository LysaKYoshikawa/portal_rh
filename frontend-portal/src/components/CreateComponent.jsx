import React, {useState} from 'react'
import postService from '../service/postService';

function CreateComponent(){
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [rg,setRg] = useState('');
    const [cpf,setCpf] = useState('');
    const [image,setImage] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();

        const formData = new FormData();

        formData.append('title', title);
        formData.append('date', date);
        formData.append('rg', rg);
        formData.append('cpf', cpf);
        formData.append('image', image);

        const response = await postService.create(formData);
        console.log('Esse é o response da api para front',response)
        event.target.reset();

    };

    return (
        <div>
            <h2> Seu formulario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    placeholder='Enter Post Title'
                    onChange={event => setTitle(event.target.value)}
                    required/>
                <br/>
                <input type="date"
                    name="date"
                    onChange={event => setDate(event.target.value)}
                    required/>
                <br/>
                <input type="number"
                    name="rg"
                    onChange={event => setRg(event.target.value)}
                    required/>
                <br/>
                <input type="number"
                    name="cpf"
                    onChange={event => setCpf(event.target.value)}
                    required/>
                <br/>
                <input type="file"
                    name="image"
                    onChange={event => setImage(event.target.files[0])}
                    required/>
                <br/>
                <button>Enviar</button>

            </form>
            <p>{message}</p>
        </div>
    )
};

export default CreateComponent;
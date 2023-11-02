import {useState, useEffect} from 'react';
import postService from '../service/postService';
import UpdateModalComponent from "./UpdateModalComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowComponent(){

    const[posts, setPosts] = useState({});

    const fetchPosts = async()=>{
        setPosts(await postService.gestPosts());
    }

    fetchPosts();

    useEffect(()=>{
        fetchPosts();

    },[posts]);

    const deletePost = async(id, e)=>{

       let response =  await postService.deletePost(id);
       if(response.data.success == true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();

       }else{
            alert(response.data.msg);

       }
        
    }

    return(
        <div className="App">
            <h2>Lista de cadastro</h2>
            {
                posts.data != undefined && posts.data.data.length > 0 && (
                    <table style={{width:'100%'}} border='1'>
                        <thead>
                            <th>Nome Completo</th>
                            <th>Data de nascimento</th>
                            <th>E-mail</th>
                            <th>Celular</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>PDF RG/CPF</th>
                            <th>Endereço</th>
                            <th>Comprovante residencial</th>
                            <th>Contrato de trabalho</th>
                            <th>Curriculo atualizado</th>
                            <th>Delete</th>
                            <th>Editar</th>
                        </thead>
                        <tbody>
                            {
                                posts.data.data.map(post=>(
                                    <tr>
                                        <td>{post.name}</td>
                                        <td>{post.date}</td>
                                        <td>{post.email}</td>
                                        <td>{post.cel}</td>
                                        <td>{post.rg}</td>
                                        <td>{post.cpf}</td>
                                        <td>{post.fileDoc}</td>
                                        <td>{post.address}</td>
                                        <td>{post.fileAddress}</td>
                                        <td>{post.fileEmployContract}</td>
                                        <td>{post.fileResume}</td>
                                        <td>
                                            <button id={post._id} onClick={(e)=>deletePost(post._id,e)}>Delete</button>
                                        </td>
                                        <td>
                                            <UpdateModalComponent id={post._id} name={post.name}date={post.date}email={post.email}cel={post.cel}rg={post.rg}cpf={post.cpf}address={post.address}/>
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
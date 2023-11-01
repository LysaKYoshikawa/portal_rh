import {useState, useEffect} from 'react';
import postService from '../service/postService';

function ShowComponent(){

    const[posts, setPosts] = useState({});

    const fetchPosts = async()=>{
        setPosts(await postService.gestPosts());
    }

    fetchPosts();

    useEffect(()=>{
        fetchPosts();

    },[]);

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
                            <th>Titulo</th>
                            <th>Data de nascimento</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>Anexo</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {
                                posts.data.data.map(post=>(
                                    <tr>
                                        <td>{post.title}</td>
                                        <td>{post.date}</td>
                                        <td>{post.rg}</td>
                                        <td>{post.cpf}</td>
                                        <td>{post.image}</td>
                                        <td>
                                            <button id={post._id} onClick={(e)=>deletePost(post._id,e)}>Delete</button>
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
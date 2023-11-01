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

    console.log(posts);

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
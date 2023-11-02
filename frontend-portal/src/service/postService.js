import axios from "axios";

class Post{
    create(formData){
        const url = "http://localhost:8001/api/create-post";
        const config = {
            headers:{
                'content-type':'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    };

    gestPosts(){
        const url = "http://localhost:8001/api/get-posts";

        return axios.get(url);
    }

    deletePost(id){
        const url = "http://localhost:8001/api/delete-post/"+id;

        return axios.get(url);
    }

    update(formData){
        const url = "http://localhost:8001/api/update-post";
        const config = {
            headers:{
                'content-type':'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    };
    
}


const postService = new Post();

export default postService;
import axios from "axios";

class Register{
    create(formData){
        const url = "http://localhost:8001/api/create-register";
        const config = {
            headers:{
                'enctype':'multipart/form-data',
            }
        };
        return axios.register(url, formData, config);
    };

    getRegisters(){
        const url = "http://localhost:8001/api/get-register";

        return axios.get(url);
    }

    deleteRegister(id){
        const url = "http://localhost:8001/api/delete-register/"+id;

        return axios.get(url);
    }

    update(formData){
        const url = "http://localhost:8001/api/update-register";
        const config = {
            headers:{
                'enctype':'multipart/form-data',
            }
        };
        return axios.register(url, formData, config);
    };
    
}


const registerService = new Register();

export default registerService;
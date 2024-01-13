const moment = require('moment');
const Register = require('../models/registerModel');

const createRegister = async (req, res) => {
    try {
        if (!req.files || !req.files['fileResume']) {
            return res.status(400).send({ success: false, msg: 'Campo de arquivo "Curriculo" ausente ou upload falhou.' });
        }
        const date = moment(req.body.date, "DD/MM/YYYY").toDate();

        const register = new Register({
            name: req.body.name,
            date: date,
            email: req.body.email,
            rg: req.body.rg,
            cpf: req.body.cpf,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            office: req.body.office,
            skills: req.body.skills,
            profileLinkedin: req.body.profileLinkedin,
            fileResume: req.files['fileResume'][0].path,
            cel: req.body.cel
        });
        console.log('o que vai aparecer',req.files['fileResume'][0].path)

        const registerData = await register.save();

        res.status(200).send({ success: true, msg: 'Register Data', data: registerData });
    } catch (error) {
        res.status(400).send({ success: false, msg: 'Houve um erro no registro falta dados ou documentos : '.error.message  });
    }
};

const getRegister = async (req, res) => {

    try {

        const registers = await Register.find({});
        res.status(200).send({ sucess: true, msg: 'Register Data', data: registers });

    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message });

    }
}

const deleteRegister = async (req, res) => {

    try {

        const id = req.params.id;

        await Register.deleteOne({ _id: id });
        res.status(200).send({ sucess: true, msg: 'Funcionario deletado com Sucesso!!!' });

    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message });

    }
}

const updateRegister = async (req, res) => {
    try {

        if (req.files['fileResume'] !== undefined) {
            

            let id = req.body.id;
            let name = req.body.name;
            let date = moment(req.body.date, "DD/MM/YYYY").toDate();
            let email = req.body.email;
            let rg = req.body.rg;
            let cpf = req.body.cpf;            
            let address = req.body.address;
            let city= req.body.city;
            let state= req.body.state;
            let profileLinkedin = req.body.profileLinkedin;
            let fileResume = req.files['fileResume'][0].path;

            await Register.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    date: date,
                    email: email,
                    rg: rg,
                    cpf: cpf,
                    address: address,
                    city: city,
                    state: state,
                    profileLinkedin: profileLinkedin,
                    fileResume: fileResume,
                    
                }
            });
            res.status(200).send({ sucess: true, msg: 'Funcionario ATUALIZADO com Sucesso!!!' });
        }

        else {

            let id = req.body.id;
            let name = req.body.name;
            let date = moment(req.body.date, "DD/MM/YYYY").toDate();;
            let email = req.body.email;
            let rg = req.body.rg;
            let cpf = req.body.cpf;
            let address = req.body.address;
            let city= req.body.city;
            let state= req.body.state;
            let profileLinkedin = req.body.profileLinkedin;

            await Register.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    date: date,
                    email: email,
                    rg: rg,
                    cpf: cpf,
                    address: address,
                    city: city,
                    state: state,
                    profileLinkedin: profileLinkedin,
                    msg: error.message
                }
            });
            res.status(200).send({ sucess: true, msg: 'Funcionario ATUALIZADO com Sucesso!!!' });

        }



    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message });
    }
}

module.exports = {
    createRegister,
    getRegister,
    deleteRegister,
    updateRegister
};
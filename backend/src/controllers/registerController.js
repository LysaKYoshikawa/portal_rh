const Register = require('../models/registerModel');

const createRegister = async (req, res) => {
    try {
        if (!req.files || !req.files['fileDoc']) {
            return res.status(400).send({ success: false, msg: 'Campo de arquivo "fileDoc" ausente ou upload falhou.' });
        }

        console.log(req.files)

        const register = new Register({
            name: req.body.name,
            date: req.body.date,
            email: req.body.email,
            rg: req.body.rg,
            cpf: req.body.cpf,
            fileDoc: req.files['fileDoc'][0].filename,
            address: req.body.address,
            fileAddress: req.files['fileAddress'][0].path,
            fileEmployContract: req.files['fileEmployContract'][0].path,
            fileResume: req.files['fileResume'][0].path,
            cel: req.body.cel
        });

        const registerData = await register.save();

        res.status(200).send({ success: true, msg: 'Register Data', data: registerData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
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

        if (req.file !== undefined) {

            let id = req.body.id;
            let name = req.body.name;
            let date = req.body.date;
            let email = req.body.email;
            let rg = req.body.rg;
            let cpf = req.body.cpf;
            let fileDoc = req.body.fileDoc;
            let address = req.body.address;
            let fileAddress = req.file.fileAddress;
            let fileEmployContract = req.file.fileEmployContract;
            let fileResume = req.file.fileResume;
            let cel = req.body.cel;

            await Register.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    date: date,
                    email: email,
                    rg: rg,
                    cpf: cpf,
                    fileDoc: fileDoc,
                    address: address,
                    fileAddress: fileAddress,
                    fileEmployContract: fileEmployContract,
                    fileResume: fileResume,
                    cel: cel
                }
            });
            res.status(200).send({ sucess: true, msg: 'Funcionario ATUALIZADO com Sucesso!!!' });
        }

        else {

            let id = req.body.id;
            let name = req.body.name;
            let date = req.body.date;
            let email = req.body.email;

            let rg = req.body.rg;
            let cpf = req.body.cpf;
            let address = req.body.address;
            let cel = req.body.cel;

            await Register.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    date: date,
                    email: email,
                    rg: rg,
                    cpf: cpf,
                    address: address,
                    cel: cel,
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
const { createRegister, getRegister, deleteRegister, updateRegister } = require('../controllers/registerController');
const Register = require('../models/registerModel');

describe('Testes para o controller Register', () => {
  // Antes de cada teste, redefinimos o comportamento do Register
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('deve criar um registro', async () => {
    const req = {
      body: { name: 'Teste',
       date: '2023-01-01',
        email: 'teste@teste.com.br',
        rg: '122345-5',
        cpf: 'teste@teste.com.br',
        celular: 11958275624, 
        address: 'Rua da contratada numero 30',
        city: 'São Paulo',   
        state: 'SP',
        zip: '04370020'   },
      files: { fileDoc: ['../public/postFilename/Ada Lovelace.pdf'] },
    };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    // Mock do método save do Register
    const saveMock = jest.fn(() => ({ _id: 'testId', name: 'Teste',
    date: '2023-01-01',
     email: 'teste@teste.com.br',
     rg: '122345-5',
     cpf: 'teste@teste.com.br',
     celular: 11958275624, 
     address: 'Rua da contratada numero 30',
     city: 'São Paulo',   
     state: 'SP',
     zip: '04370020' }));
    jest.spyOn(Register.prototype, 'save').mockImplementation(saveMock);

    await createRegister(req, res);

    expect(saveMock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      msg: 'Register Data',
      data: { _id: 'testId', name: 'Teste',
      date: '2023-01-01',
       email: 'teste@teste.com.br',
       rg: '122345-5',
       cpf: 'teste@teste.com.br',
       celular: 11958275624, 
       address: 'Rua da contratada numero 30',
       city: 'São Paulo',   
       state: 'SP',
       zip: '04370020' },
    });
  });

  it('deve obter registros', async () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    // Mock do método find do Register
    const findMock = jest.fn(() => [{name: 'Teste',
    date: '2023-01-01',
     email: 'teste@teste.com.br',
     rg: '122345-5',
     cpf: 'teste@teste.com.br',
     celular: 11958275624, 
     address: 'Rua da contratada numero 30',
     city: 'São Paulo',   
     state: 'SP',
     zip: '04370020'}]);
    jest.spyOn(Register, 'find').mockImplementation(findMock);

    await getRegister(req, res);

    expect(findMock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      msg: 'Register Data',
      data: [/* registros mock */],
    });
  });

  it('deve deletar um registro', async () => {
    const req = {
      params: { id: 'testId' },
    };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    // Mock do método deleteOne do Register
    const deleteOneMock = jest.fn();
    jest.spyOn(Register, 'deleteOne').mockImplementation(deleteOneMock);

    await deleteRegister(req, res);

    expect(deleteOneMock).toHaveBeenCalledWith({ _id: 'testId' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      msg: 'Funcionario deletado com Sucesso!!!',
    });
  });

  it('deve atualizar um registro', async () => {
    const req = {
      body: { id: 'testId', name: 'Teste atualizado',name: 'Teste',
      date: '2023-01-01',
       email: 'teste@teste.com.br',
       rg: '122345-5',
       cpf: 'teste@teste.com.br',
       celular: 11958275624, 
       address: 'Rua da contratada numero 30',
       city: 'São Paulo',   
       state: 'SP',
       zip: '04370020' },
      files: { fileDoc: ['../public/postFilename/Ada Lovelace.pdf'] },
    };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    // Mock do método findByIdAndUpdate do Register
    const findByIdAndUpdateMock = jest.fn();
    jest.spyOn(Register, 'findByIdAndUpdate').mockImplementation(findByIdAndUpdateMock);

    await updateRegister(req, res);

    expect(findByIdAndUpdateMock).toHaveBeenCalledWith(
      'testId',
      {
        $set: {
          name: 'Teste atualizado',
          date: '2023-01-01',
          email: 'teste@teste.com.br',
          rg: '122345-5',
          cpf: 'teste@teste.com.br',
          celular: 11958275624, 
          address: 'Rua da contratada numero 30',
          city: 'São Paulo',   
          state: 'SP',
          zip: '04370020'
        },
      }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      msg: 'Funcionario ATUALIZADO com Sucesso!!!',
    });
  });
});

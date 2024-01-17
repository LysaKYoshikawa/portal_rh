# :computer: Portal RH
<div align="center">

![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/95533591-29d2-481b-a880-366b1e5cb1f1)

</div>




#  :star: About the project

Este projeto trata-se de uma portal de cadastro de funcionarios com a tela de cadastro e a tela de lista de funcionarios com a opção de excluir e atualizar o funcionario

## Estrutura de Diretórios

Ele é dividido em duas partes a parte backend e frontend separando sua responsabilidades.

## :grin: No projeto frontend temos: 
- `public`: Contém codigo inicial do react.
- `src`: Contém o código-fonte principal do aplicativo.
  - `components`: Componentes.
  - `services`: Funções de serviço para buscar dados ou realizar operações.
- `index`: dados das rotas
- `App.tsx`: Ponto de entrada do aplicativo.

##  Sobre o front do Portal:
Segue imagem da tela de cadastro, foi desenvolvida com informações basicas de cadastro.

<div align="center">

![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/cc8c95b7-80c0-452f-a9c5-9878452c8ff4) </div>


Na tela Lista de cadastro ele mostra o cadastro dos candidatos com opção botão para deletar, atualizar dados caso seja necessario e um botão de documento, que atualmente monsta o destido do documento, mas como feature quero que o botão faça download do documento ou abra ele em uma proxima aba.
<div align="center">

![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/423e9911-854d-4004-ad3f-c36fcca69f50)

</div>



Eles estão responsivos com auxilio do bootstrap e css:

<div align="center">

<img src="https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/86d66247-5d54-4574-8b95-cd29edbaea94" width="300" alt="Image 1">

<img src="https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/99e86ddd-dba9-4610-b38a-a39fa6c398a7" width="300" alt="Image 2">

<img src="https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/3edc7ce8-19ec-45bd-b630-392aaa02b045" width="300" alt="Image 3">

</div>


## :smirk: No projeto backeand: 


- `src`: Contém o código-fonte principal do aplicativo.
    - `controllers`: Controle das minhas rotas.
    - `models`: Contem o model do meu formulario especificando seus campos e tipos
    - `public`: pasta onde é salvo localmente meu arquivos .pdf
    - `routes`: Registro das minhas rotas 
- `index`: Ponto de entrada do codigo e conexão com meu banco de dados MongoDB

### Sobre o Backend do Portal:
Para o portal segui uma arquitetura mvc, separando minhas responsabilidades em dentro do model, controller e routes. 
Para oss testes no backend eu ultilizei jest.js e coloquei alguns dados mocks para testar as funcionalidades.

Utilizei para fazer a solicitação de requsição o insomia para facilitar segue minha coleção salva para teste no insomia:

```
\portal_rh\backend\public\Insomnia_portalRH

```
<div align="center">

Create

![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/e6a31395-9bed-4dd6-876f-fa87853e6564)

Update:

![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/d9f23268-d30c-40b6-bded-b9d415d62454)

Minha lista
![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/f8cf6a9a-3e13-46f6-aa9a-e6ec1c9c8a1c)

Delete:
![image](https://github.com/LysaKYoshikawa/portal_rh/assets/64383080/cafa65ec-5567-46f6-bdb9-d8cee7478afa)


</div>

Banco de dados eu utilizei o MongoDB no readme do backend tem todo um passo a passo para instalação. Ele é muito pratico e para algumas features fazer algumas queries para monitoramento.



## :wrench: Configuração
Primeiramente sugiro rodar o backend e depois o frontend

- rodar projeto backend 
[passo a passo do backend](../portal_rh/backend/README.md) : ../portal_rh/backend/README.md

- rodar projeto front 
[passo a passo do frontend](../portal_rh/frontend-portal/README.md) : ../portal_rh/frontend-portal/README.md




## :pushpin:  Bibliotecas Utilizadas

- axios
- react
- multer
- Javascript
- node.js
- jest


## :gem: Contribuindo

Sinta-se à vontade para contribuir e fazer sugestões para melhorar este aplicativo de exemplo.


#  :information_desk_person: Author
Monalysa Klauck Yoshikawa
[Linkedin] : <https://www.linkedin.com/in/monalysa-yoshikawa/>
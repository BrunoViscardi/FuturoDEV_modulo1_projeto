<h1 align="center"> OLYMPYAN project </h1>


OLYMPYAN project é uma plataforma que facilita a integração, compartilhamento e gerenciamento de locais destinados a atividades físicas. Os usuários da plataforma podem encontrar pontos de atividades próximos em uma lista de locais cadastrados, visualizar informações sobre os exercícios e registrar suas próprias contribuições para o sistema.

## ✅ Funcionalidades

 - Cadastro de novo usuário
 - Visualização de locais de atividades físicas cadastrados
 - Visualização de usuários ativos
 - Cadastro de novo local de atividades
 - Editar e apagar local de atividades
 

## 🚀Demonstração de uso

<div align="center"><div/>



https://github.com/BrunoViscardi/FuturoDEV_modulo1_projeto/assets/139285339/bb9763f3-1f8a-45f2-a9ee-d02bed6fd251



<div align="left"><div/>


## 🧩Ferramentas de desenvolvimento

<div align="center"><div/>
  
| 🧩 | Ferramentas |
|--|--|
|<img width="50 px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"> |JavaScript|
|<img width="50 px" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"> |HTML|
|<img width="50 px" src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png> |React|
|<img width="50 px" src=https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png> |React Router|
|<img width="50 px" src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4"> |Json Server|
|<img width="50px" src="https://camo.githubusercontent.com/2e1efd50b61f26c56e82929d735dce115937350e280abac98641c79d765da27c/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite"> |Vite|
|<img width="50px" src = "https://mui.com/static/logo.png"> |Material UI|
|<img width="50px" src = "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" alt="React hook form"> |React Hook form|


<div align="left"><div/>


## 🔨Construção e instalação de dependências

**React + Vite**
```
npm create vite@latest
npm install
cd project-name
```

**Json-server**
```
npm install json-server
```

**React-router-dom**
```
npm install react-router-dom
```

**React-hook-form**
```
npm install react-hook-form
```

**Material UI - Icons**
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```


## ▶️Execução
**Vite**
```
npm run dev
```

**Json-server**
```
npx json-server ./data/db.json
```





## 💊 Sugestão de melhorias 

 - Ao usuário que não tenha mais seus dados em permanência no LocalStorage (isAutenticado" - true) por motivos adversos ou exclusão forçada, eliminá-lo da lista de usuários ativos;
 - Exclusão de locais permitido somente ao usuaário que o cadastrou;
 - Implementar responsividade para diferentes tipos de tela;
 - Implementar uso de mapas interativos no lugar da lista de locais de exercícios com base na latitude e longitude fornecido pelo usuário. Sugestão: uso da biblioteca React Leaflet.
